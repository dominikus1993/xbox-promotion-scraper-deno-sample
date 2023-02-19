import { caluclatePromotion, XboxGame } from "../types/game.ts";
import { filter, Observable } from "npm:rxjs@7.6.0";

export function gamePromotionPriceFilter(stream: Observable<XboxGame>) : Observable<XboxGame> {
    return stream.pipe(
        filter(game => caluclatePromotion(game) > 40)
    )
}