import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import { Game } from "../types/game.ts";

const url = "https://www.microsoft.com/pl-pl/store/deals/games/xbox"

function parseTitleAndUrl($: cheerio.CheerioAPI, element: cheerio.Element) : {url: string, title: string } {
    const data = $(element).find("a").first()
    return { url: data[0].attribs.href, title: data.text()}
}

function parsePrice($: cheerio.CheerioAPI, element: cheerio.Element) {
    const data = $(element).find("p[aria-hidden='true']")
    console.log(data.text())
}

export async function parsePage() {
  const res = await fetch(url)
  const html = await res.text()

  const $ = cheerio.load(html)
  const cardPlacement = $("div.card").find("div.card-body")
  const price = cardPlacement.find("p[aria-hidden='true']")
  for (const element of cardPlacement) {
    let res = parseTitleAndUrl($, element)
    parsePrice($, element)

    console.log(res)
  }
}