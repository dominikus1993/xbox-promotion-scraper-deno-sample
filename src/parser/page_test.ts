import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { pageUrl } from "./page.ts";

Deno.test(function pageZeroUrl() {
  const page = pageUrl(0)
  assertEquals("https://www.microsoft.com/pl-pl/store/deals/games/xbox", page)
});
