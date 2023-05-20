import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutCategorieService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdateCategorie(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/categorie/edit",user)

  }
 getAllCategorie():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/categorie");
  }
  DeleteCategorie(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/categorie/delete/"+id);
  }
  
AddCategorie(data : any){
  return this.http.post<any>("http://localhost:8080/projet/categorie/create",data
); }
}