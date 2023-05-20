import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
 getstade():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/Equipe/Satades");
  }

getEquipe():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/Equipe/Equipes");
  }
getligue():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/ligue/Ligues");
  }
  getCoeach():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/user/findCoach");
  }

  getAllMatch():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/match/getmatch");
  }

  UpdateMatch(match:any):Observable<any>{

    return this.http.post<any>("http://localhost:8080/projet/match/edit/",match)

  }
  DeleteMatch(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/match/delete/"+id);
  }
  

AddMatch(data : any){
    return this.http.post<any>("http://localhost:8080/projet/match/create",data
 ); }
}
