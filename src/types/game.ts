
export interface Game {
    readonly title: string 
    readonly url: string
}

export interface RegularGame extends Game {
    kind: "Regular"
    readonly price?: number;
    readonly promotionPrice?: number;
}

export interface GamePassGame extends Game {
    kind: "GamePass"
}

export type XboxGame = RegularGame | GamePassGame