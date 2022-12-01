import { Guest } from "./Guest";

export interface Wish {
    relation:string,
    yourWish:string,
    guests:Guest[]
}