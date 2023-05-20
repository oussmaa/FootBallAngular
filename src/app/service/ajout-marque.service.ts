import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutMarqueService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdateMarque(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/marque/edit",user)

  }
 getAllMarque():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/marque");
  }
  DeleteMarque(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/marque/delete/"+id);
  }
  
AddMarque(data : any){
  return this.http.post<any>("http://localhost:8080/projet/marque/create",data
); }
}