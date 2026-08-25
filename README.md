# kintools.dev

Marketing site and unified docs for the kintools libraries.

# Getting Started

To run this application (requires [Deno](https://deno.com) v2 or later):

```bash
deno task dev
```

# Building For Production

To build this application for production:

```bash
deno task build
```

This reads doc content directly from `../form/docs` and `../store/docs` (see
`src/content/form.ts`/`store.ts`), so it only works with the `form` and `store`
repos checked out as siblings of this one, e.g.:

```
kintools/
  kintools.dev/
  form/
  store/
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/global.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Remove `@tailwindcss/vite` and `tailwindcss` from `deno.json`'s `imports`

## Linting & Formatting

This project uses Deno's built-in linter and formatter. The following tasks are
available:

```bash
deno task lint
deno task format
deno task check
```

## Deploying

Cloudflare Pages' git integration only clones this one repo, so `form`/`store`
aren't checked out alongside it the way local dev expects. The Pages build
command works around that by cloning them itself (both are public) before
running the real build:

```bash
curl -fsSL https://deno.land/install.sh | sh -s -- -y && export PATH="$HOME/.deno/bin:$PATH" && git clone --depth 1 https://github.com/kintools-dev/form.git ../form && git clone --depth 1 https://github.com/kintools-dev/store.git ../store && deno task build
```

Configure the Pages project with that as the build command and `dist/client` as
the build output directory. `dist/` itself is gitignored -- it's build output,
not something to commit.

Because Pages only watches pushes to this repo, a docs change in `form` or
`store` alone won't trigger a rebuild here. Each of those repos has a
`docs/**`-triggered workflow that hits this project's Cloudflare Pages deploy
hook (Settings -> Builds & deployments -> Deploy hooks) to pick up the change.

## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based
routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes`
directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between
them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the
`Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>;
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the
[Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in
`src/routes/__root.tsx`. Anything you add to the root route will appear in all
the routes. The route content will appear in the JSX where you render
`{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "My App" },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
});
```

More information on layouts can be found in the
[Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side
code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from "@tanstack/react-start";

const getServerTime = createServerFn({
  method: "GET",
}).handler(async () => {
  return new Date().toISOString();
});

// Use in a component
function MyComponent() {
  const [time, setTime] = useState("");

  useEffect(() => {
    getServerTime().then(setTime);
  }, []);

  return <div>Server time: {time}</div>;
}
```

## API Routes

You can create API routes by using the `server` property in your route
definitions:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

export const Route = createFileRoute("/api/hello")({
  server: {
    handlers: {
      GET: () => json({ message: "Hello, World!" }),
    },
  },
});
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack
Query to fetch data from a server. But you can also use the `loader`
functionality built into TanStack Router to load the data for a route before
it's rendered.

For example:

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/people")({
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json();
  },
  component: PeopleComponent,
});

function PeopleComponent() {
  const data = Route.useLoaderData();
  return (
    <ul>
      {data.results.map((person) => <li key={person.name}>{person.name}</li>)}
    </ul>
  );
}
```

Loaders simplify your data fetching logic dramatically. Check out more
information in the
[Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

# Learn More

You can learn more about all of the offerings from TanStack in the
[TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit
[TanStack Start](https://tanstack.com/start).
