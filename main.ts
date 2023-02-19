import { parsePages } from "./src/parser/index.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await parsePages(10)
}
