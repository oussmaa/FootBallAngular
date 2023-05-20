import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercice } from '../Model/Exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceServiceService {
  private baseUrl='http://localhost:8080/projet/exercice';
 
   constructor(private httpClient: HttpClient) { }
    
    getExercieList():Observable<Exercice[]>{
        
      return this.httpClient.get<Exercice[]>(this.baseUrl);
    }

    getExercice(id: number):Observable<Exercice> {

      const exerciceUrl = `${this.baseUrl}/${id}`;
      return this.httpClient.get<Exercice>(exerciceUrl) ; 
    }

    updateExercice(ex : Exercice){
      const editUrl = `http://localhost:8080/projet/exercice/edit`
      return this.httpClient.post(editUrl,ex)
    }

    deleteExercice(id: number) {
      const url = `${this.baseUrl}/delete/${id}`;
      return this.httpClient.delete(url);
    }

    createExercice(ex :Exercice){
      const createUrl = `${this.baseUrl}/create` ;
      return this.httpClient.post(createUrl,ex);
    }
  }