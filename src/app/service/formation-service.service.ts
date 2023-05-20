import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../Model/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  private baseUrl='http://localhost:8080/projet/formation';
 
   constructor(private httpClient: HttpClient
    ) { }
    
    getFormationList():Observable<Formation[]>{
       
      
      return this.httpClient.get<Formation[]>(this.baseUrl );
    }

    getFormation(id: number):Observable<Formation> {

      const formationUrl = `${this.baseUrl}/${id}`;
      return this.httpClient.get<Formation>(formationUrl, ) ; 
    }

    updateFormation(f : Formation){
      const editUrl = `http://localhost:8080/projet/formation/edit`
      return this.httpClient.post(editUrl,f)
    }

    deleteFormation(id: number) {
      const url = `${this.baseUrl}/delete/${id}`;
      return this.httpClient.delete(url);
    }

    createFormation(f:Formation){
      const createUrl = `${this.baseUrl}/create` ;
      return this.httpClient.post(createUrl,f);
    }

    
}
