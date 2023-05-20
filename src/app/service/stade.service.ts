import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadeService {
  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdateSatde(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/Equipe",user)

  }
 getAllSatde():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/Equipe");
  }
  DeleteSatde(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/Equipe/"+id);
  }
  
AddSatde(data : any){
  return this.http.post<any>("http://localhost:8080/projet/Equipe",data
); }
}