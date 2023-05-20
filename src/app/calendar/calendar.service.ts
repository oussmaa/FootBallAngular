import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Calendar } from './calendar';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http : HttpClient) { }

  postCalendar(data : any){
    return this.http.post<any>("http://localhost:8080/addUser",data);
  }


  postEvent(data : any){
    return this.http.post<any>("http://localhost:8080/projet/evenement/create",data);
  }
   getCalendar():Observable<any>{
    return this.http.get<Calendar>("http://localhost:8080/users");
  }

  getAllEvent():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/evenement");
  }
 
updateCalendar(calendar:any,id:any):Observable<any>{
    return this.http.put<any>("http://localhost:8080/projet/evenement/edit/"+id,calendar)}


deleteEvent(data :any):Observable<any>{
  
  return this.http.delete<any>("http://localhost:8080/projet/evenement/delete/"+data);
} 
}