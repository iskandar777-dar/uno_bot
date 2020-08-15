import { GameInfo, PlayerInfo } from "@uno_bot/main/typings"

declare module "@uno_bot/main/typings/events/index.events" {
  export interface EventContextMap {
    "player:joined": PlayerJoinedContext
    "player:left": PlayerLeftContext
    "player:kicked": PlayerKickedContext
  }
}

export interface PlayerContextBase {
  game: GameInfo
  player: PlayerInfo
}

export interface PlayerJoinedContext extends PlayerContextBase {}

export interface PlayerLeftContext extends PlayerContextBase {}

export interface PlayerKickedContext extends PlayerContextBase {}