import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutLigueService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdateLigue(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/ligue",user)

  }
 getAllLigue():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/ligue/Ligues");
  }
  DeleteLigue(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/ligue/"+id);
  }
  
AddLigue(data : any){
  return this.http.post<any>("http://localhost:8080/projet/ligue",data
); }
}