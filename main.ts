import { concatMap, filter, from, map, mergeMap, Observable, range, toArray } from "npm:rxjs@7.6.0";
import { gamePromotionPriceFilter } from "./src/filter/price.ts";
import { parsePages } from "./src/parser/index.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await gamePromotionPriceFilter(parsePages(10))
    .pipe(
      toArray()
    )
    .subscribe(games => console.table(games))
}
