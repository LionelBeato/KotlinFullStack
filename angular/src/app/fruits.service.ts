import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fruit } from './fruit/Fruit';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root',
})

export class FruitsService {

  

apiUrl = 'http://localhost:8080/fruits';



  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getFruit(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  postFruit(fruit:Fruit): Observable<any> {
    return this.http.post<Fruit>(`post/${this.apiUrl}`, fruit, httpOptions);
  }

  


}
