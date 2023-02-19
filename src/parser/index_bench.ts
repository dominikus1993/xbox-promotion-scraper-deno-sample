import { parsePages } from "./index.ts";

Deno.bench(async function parsePageBench() {
    await parsePages(3)
});
