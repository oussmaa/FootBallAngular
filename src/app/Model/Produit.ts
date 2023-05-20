import { Categorie } from "./Categorie";
import { Marque } from "./Marque";

export interface Produit {
    idProduit:number;
    nomProduit:string;
    prix :number;
    description:string;
    couleur:number;
    genre:string;
    taille:string;
    favoris:boolean;
    image:string;
    moy:number;
    categorie:Categorie;
    marque:Marque;
    
}