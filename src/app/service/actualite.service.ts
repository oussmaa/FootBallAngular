import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }


  getAllActualite():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/actualite");
  }

 

  UpdateActualit(user:any,id:any):Observable<any>{
    return this.http.put<any>("http://localhost:8080/projet/actualite/edit/"+id,user)
}

  DeleteActualite(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/actualite/"+id);
  }
  
  AddCommantaire(data : any){
    return this.http.post<any>("http://localhost:8080/projet/comment",data
 ); }

 getAllCommantaireByIdActualite(id:any):Observable<any>{
  return this.http.get<any>("http://localhost:8080/projet/comment/"+id);
}

AddActualite(data : any){
    return this.http.post<any>("http://localhost:8080/projet/actualite",data
 ); }

}


