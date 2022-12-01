import { Guest } from "./Guest";

export interface RSVP {
    attending?:boolean,
    relation:string,
    yourWish:string,
    address?:string,
    guests:Guest[]
}