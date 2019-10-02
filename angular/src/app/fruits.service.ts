import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fruit } from './fruit/Fruit';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root',
})

export class FruitsService {
  private fruits: Array<Fruit>;

  constructor(private http: HttpClient) {
  }



apiUrl = 'http://localhost:8080/fruits';

  displayedColumns: string[] = ['name', 'quantity'];
  dataSource = [];

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getFruit(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  postFruit(fruit: Fruit): Observable<any> {
    return this.http.post<Fruit>(`${this.apiUrl}/post`, fruit, httpOptions);
  }

  deleteFruit(id): Observable<any> {
    return this.http.delete<Fruit>(`${this.apiUrl}/${id}/delete`, httpOptions);
  }

  putFruit(fruit: Fruit, id): Observable<any> {
    return this.http.put<Fruit>(`${this.apiUrl}/put/${id}`, fruit, httpOptions);
  }







}
