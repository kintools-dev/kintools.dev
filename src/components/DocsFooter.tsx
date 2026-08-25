/**
 * The site-wide footer: license and copyright. Takes just the `footer`
 * slice of a library's `nav.json` (not the whole `NavConfig`) so the root
 * kintools.dev homepage -- which isn't scoped to either library's nav --
 * can render the same footer too, not a hand-rolled one of its own.
 *
 * Shared by `DocsLayout` (doc pages), each library's `layout: home` page,
 * and the root homepage, all of which otherwise render no footer at all.
 */
export function DocsFooter() {
  return (
    <footer className="border-t border-border text-text2">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6">
        <p>Released under the MIT License</p>
        <p>
          Copyright &copy; 2026-present{" "}
          <a
            className="text-text1 hover:text-brand1 active:text-brand2"
            href="https://man-hoang.pages.dev"
            target="_blank"
          >
            Man Hoang (Kin)
          </a>
        </p>
      </div>
    </footer>
  );
}
