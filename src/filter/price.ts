import { filter, Observable } from "../deps.ts";
import { caluclatePromotion, XboxGame } from "../types/game.ts";

export function gamePromotionPriceFilter(stream: Observable<XboxGame>) : Observable<XboxGame> {
    return stream.pipe(
        filter(game => caluclatePromotion(game) > 40)
    )
}