import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import { Game } from "../types/game.dts";

const url = "https://www.microsoft.com/pl-pl/store/deals/games/xbox"

function parseTitleAndUrl() : Game {

}

export async function parsePage() {
  const res = await fetch(url)
  const html = await res.text()

  const $ = cheerio.load(html)
  const cardPlacement = $("div.card").find("div.card-body")
  const price = cardPlacement.find("p[aria-hidden='true']")
  const title = cardPlacement.find("a")
  for (const element of title) {
    const data = $(element)
    
    console.log({ url: data.attr("href"), text: data.text()})
  }
}