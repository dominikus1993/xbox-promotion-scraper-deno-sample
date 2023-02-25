
run:
	deno run --allow-net main.ts

bench:
	deno bench --allow-net ./src/parser/index_bench.ts