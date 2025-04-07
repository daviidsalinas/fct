import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://172.18.80.34:8080/api';

  constructor(private http: HttpClient) {}


  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/students`);
  }
}