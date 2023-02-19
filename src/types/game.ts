
export interface Game {
    readonly title: string 
    readonly url: string
}

export interface RegularGame extends Game {
    kind: "Regular"
    readonly price: number;
    readonly promotionPrice?: number;
}

export interface GamePassGame extends Game {
    kind: "GamePass"
}

export type XboxGame = RegularGame | GamePassGame


export function caluclatePromotion(game: XboxGame) : number {
    if(game.kind === "GamePass" || !game.promotionPrice) {
        return 0
    }
    return 100 - (game.promotionPrice / game.price * 100)
    
}