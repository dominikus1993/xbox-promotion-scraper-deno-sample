import { CheerioAPI, Element, filter, from, load, mergeMap, Observable } from "../deps.ts";
import { Game, RegularGame, XboxGame } from "../types/game.ts";
import { pageUrl } from "./page.ts";

function parseTitleAndUrl(
  $: CheerioAPI,
  element: Element,
): { url: string; title: string } {
  const data = $(element).find("a").first();
  return { url: data[0].attribs.href, title: data.text() };
}

function parsePrice(
  $: CheerioAPI,
  element: Element,
): { price: number; promotionPrice?: number } | null {
  const data = $(element).find("p[aria-hidden='true']");
  const text = data.text();
  const prices = text.replaceAll("zł", "").replaceAll("+", "").replaceAll(
    ",",
    ".",
  ).split(" ").filter((x) => x !== "");
  if (prices?.length === 2) {
    return {
      price: parseFloat(prices[0]),
      promotionPrice: parseFloat(prices[1]),
    };
  }
  if (prices?.length === 0) {
    return { price: parseFloat(prices[0]) };
  }
  return null;
}

async function parsePage(page: number): Promise<XboxGame[]> {
  const res = await fetch(pageUrl(page));
  const html = await res.text();

  const $ = load(html);
  const cardPlacement = $("div.card").find("div.card-body");
  const result: XboxGame[] = [];
  for (const element of cardPlacement) {
    const res: Game = parseTitleAndUrl($, element);
    const prices = parsePrice($, element);
    if (prices) {
      const game: RegularGame = { ...res, ...prices, kind: "Regular" };
      result.push(game);
      continue;
    }
    result.push({ ...res, kind: "GamePass" });
  }
  return result;
}

export function parsePages(pages: number) : Observable<XboxGame> {
  const tasks = [];
  for (let index = 0; index < pages; index++) {
    tasks.push(parsePage(index));
  }

  return from(tasks)
    .pipe(
      mergeMap((x) => x, 5),
      mergeMap(x => x.flat()),
      filter(x => x.kind !== "GamePass"),
    )
}
