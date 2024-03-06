import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDataFromAPI() {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  saveFormData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/users`, data, httpOptions);
  }
}

