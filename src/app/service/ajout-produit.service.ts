import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutProduitService {

 
  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdatProduit(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/Produit/update",user)

  }
  getAllMarque():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/marque");
  }
 getAllProduit():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/Produit/getAll");
  }
  DeleteProduit(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/Produit/delete/"+id);
  }
  getAllCategorie():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/categorie");
  }
AddProduit(data : any){
  return this.http.post<any>("http://localhost:8080/projet/Produit/create",data
); }
}