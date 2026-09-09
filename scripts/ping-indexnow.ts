// Submits every URL in public/sitemap.xml to IndexNow, so Bing (and other
// participating engines) recrawl changed pages within minutes instead of
// waiting for their own schedule.
//
// Run after a deploy: `deno task indexnow`. The build must have run first
// (scripts/build-geo.ts writes the sitemap this reads). IndexNow verifies
// ownership by fetching KEY_LOCATION, so public/<key>.txt must already be
// live at that URL -- on the very first deploy that adds it, run this once
// more by hand a minute later.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "#/lib/seo.ts";

// The matching file lives at public/<KEY>.txt and is served at KEY_LOCATION.
const KEY = "179461b699a64b43b34507d46c963e67";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const host = new URL(SITE_URL).host;

const sitemapPath = fileURLToPath(
  new URL("../public/sitemap.xml", import.meta.url),
);
const sitemap = await readFile(sitemapPath, "utf-8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error(
    "No <loc> URLs in public/sitemap.xml -- run `deno task build` first.",
  );
  Deno.exit(1);
}

const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

const body = await response.text();
console.log(
  `IndexNow ${response.status} ${response.statusText} for ${urlList.length} URLs`,
);
if (body.trim()) console.log(body.trim());

// 200 and 202 both mean accepted; 422 usually means the key file isn't
// reachable yet (see the note at the top).
if (![200, 202].includes(response.status)) Deno.exit(1);
