import { User } from "../configuration/user/user";
import { Equipe } from "./Equipe";
import { Ligue } from "./Ligue";
import { Stade } from "./Stade";

export interface Match {
    idMatch:number;
    type:string;
    ligue:Ligue;
    stade:Stade;
    coach:User;
    equipeAdversaire:Equipe;
   
}