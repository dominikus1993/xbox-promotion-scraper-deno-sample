import { parsePage } from "./index.ts";

Deno.bench(async function parsePageBench() {
    await parsePage()
});
