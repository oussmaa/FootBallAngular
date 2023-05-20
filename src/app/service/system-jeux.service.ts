import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemJeuxService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }

  UpdateSystemJeux(user:any):Observable<any>{

    return this.http.post<any>("http://localhost:8080/projet/systemejeux/edit",user)

  }
 getAllSystemJeux():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/systemejeux/");
  }
  DeleteSystemJeux(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/systemejeux/delete/"+id);
  }
  
AddSystemJeux(data : any){
  return this.http.post<any>("http://localhost:8080/projet/systemejeux/create",data
); }
}