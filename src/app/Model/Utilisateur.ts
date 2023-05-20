import { Role } from "./Role";

export interface Utilisateur{
    idUtil:number;
    username:string;
    password:string;
    nomUtil:string;
    prenomUtil:string;
    numTelUtil:string;
    emailUtil:string;
    image:string;
    roles: Role[];
}


 