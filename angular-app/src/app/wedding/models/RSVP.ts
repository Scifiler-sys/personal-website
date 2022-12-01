import { Guest } from "./Guest";
import { Wish } from "./Wish";

export interface RSVP extends Wish {
    attending:boolean,
    address:string
}