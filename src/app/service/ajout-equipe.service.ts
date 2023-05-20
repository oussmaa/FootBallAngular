import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutEquipeService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdateEquipe(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/Equipe/update",user)

  }
  getEquipe():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/Equipe/Equipes");
  }
  DeleteEquipe(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/Equipe/delete/"+id);
  }
  
AddLigue(data : any){
  return this.http.post<any>("http://localhost:8080/projet/Equipe/create",data
); }
}