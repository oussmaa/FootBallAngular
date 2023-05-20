import { Utilisateur } from "./Utilisateur";

export interface Commantaire {
    idComment:number;
    label:string;   
    likes:number;
    dislikes:number;
    actualite :string;
    userdto:Utilisateur;
    commentdate:string;
}

 