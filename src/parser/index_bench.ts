import { parsePages } from "./index.ts";

Deno.bench({permissions: { net: true }}, async function parsePageBench() {
    await parsePages(3)
});
