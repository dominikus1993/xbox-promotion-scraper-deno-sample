import { parsePages } from "./index.ts";

Deno.bench({permissions: { net: true }}, function parsePageBench() {
    parsePages(3).subscribe((_) => {});
});
