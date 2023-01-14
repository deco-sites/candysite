import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 462,
  site: "candysite",
  domains: ["deco-sites-candysite.deno.dev"],
});