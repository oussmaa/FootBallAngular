import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  UpdateUser(user:any):Observable<any>{

    return this.http.put<any>("http://localhost:8080/projet/user/edit/",user)

  }
  UpdateUserEamil(user:any):Observable<any>{

    return this.http.get<any>("http://localhost:8080/projet/user/verifieemail/"+user)

  }
  UpdateUserPasword(user:any):Observable<any>{

    return this.http.get<any>("http://localhost:8080/projet/user/SendMail/"+user)

  }
  updatePassword(password:any,id:any):Observable<any>{
    return this.http.put<any>("http://localhost:8080/projet/user/updatepassword/"+id,password)}

 
 
 getAllUsers():Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/user/allusers");
  }
  DeleteUser(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/projet/user/delete/"+id);
  }
  GetUserUserByusername(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:8080/projet/user/nom/"+id);
  }
  
AddUsers(data : any){
  return this.http.post<any>("http://localhost:8080/projet/user/createUtilisateur",data); 
}





login(data : any){
  return this.http.post<any>("http://localhost:8080/projet/login",data); 
}




}