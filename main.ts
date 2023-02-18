import { parsePage } from "./src/parser/index.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Result =", await parsePage());
}
