import { createStore, type Store } from "@kintools/store-core";

/**
 * A store backed by `localStorage[key]`: its initial value comes from
 * `parse`, and every later change is serialized straight back to the same
 * key.
 *
 * `parse` runs once, synchronously, while the module is evaluated, so the
 * first client render can line up with the server-rendered HTML. It receives
 * the raw stored string (or `null`) and returns a valid value. It may also
 * run in a prerender with no DOM, so guard any `document` / `window` access
 * or pass `ssrValue`.
 *
 * `ssrValue`, when given, replaces `parse` entirely: the server and the
 * first client render both use it, so a real per-request SSR pass (the dev
 * server does this) cannot disagree with the hydrated markup. Leave it unset
 * once the output is static and the client is free to restore the saved
 * value.
 *
 * Seeding is not a `set`, so it never writes storage: a value `parse`
 * derives from the environment (an OS preference, say) is not persisted
 * until something explicitly sets it.
 *
 * `onChange` runs after every change (never on the seed), alongside the
 * storage write, for reflecting the value somewhere else, e.g. onto a DOM
 * attribute a stylesheet keys off.
 *
 * @template T The state type. A non-string state needs a matching
 * `serialize`.
 */
export function createStoreWithStorage<T>(
  { key, parse, serialize = String, ssrValue, onChange }: {
    key: string;
    parse: (stored: string | null) => T;
    serialize?: (value: T) => string;
    ssrValue?: T;
    onChange?: (value: T) => void;
  },
): Store<T> {
  const hasStorage = typeof localStorage !== "undefined";
  const initial = ssrValue !== undefined
    ? ssrValue
    : parse(hasStorage ? localStorage.getItem(key) : null);

  const store = createStore<T>(initial);
  if (hasStorage) {
    store.subscribe((get) => {
      const value = get();
      localStorage.setItem(key, serialize(value));
      onChange?.(value);
    });
  }
  return store;
}
