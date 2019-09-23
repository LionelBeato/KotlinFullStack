import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class FruitsService {

apiUrl:string = 'http://localhost:8080/';


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


}
