import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:3306/employees";
  constructor(private http:HttpClient) { }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  getByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}getByEmail?email=${email}`);
  }
  addUser(record:Employee):Observable<any[]>{
    return this.http.post<any[]>(this.baseUrl,{data:record})
  }
  deleteUser(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseUrl}/${id}`)
  }
  updateUser(id:number,record:Employee):Observable<any[]>{
    return this.http.put<any[]>(`${this.baseUrl}/id?=${id}`,{data:record})
  }
}
