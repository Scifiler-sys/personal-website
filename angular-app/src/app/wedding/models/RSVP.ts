import { Guest } from "./Guest";

export interface RSVP {
    attending:boolean,
    relation:string,
    yourWish:string,
    extraGuest:number,
    address:string,
    guests:Guest[]
}