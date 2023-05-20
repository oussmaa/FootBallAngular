import { Commantaire } from "./Commantaire";

export interface Actualite {
    idActualite:number;
    titre:string;   
    contenu:string;
    image:string;
    actualitedate :string;
    comments:Commantaire[];
}