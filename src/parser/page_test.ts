import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { pageUrl } from "./page.ts";

Deno.test(function pageZeroUrl() {
  const page = pageUrl(0)
  assertEquals("https://www.microsoft.com/pl-pl/store/deals/games/xbox", page)
});

Deno.test(function pageOneUrl() {
    const page = pageUrl(1)
    assertEquals("https://www.microsoft.com/pl-pl/store/deals/games/xbox", page)
  });

  Deno.test(function pageTwoUrl() {
    const page = pageUrl(2)
    assertEquals("https://www.microsoft.com/pl-pl/store/deals/games/xbox?skipitems=90", page)
  });