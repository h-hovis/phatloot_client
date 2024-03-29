import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private url = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl);
  }

  getUserById(id:number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${id}`);
  }

  createUser(user: {firstName: string, lastName: string, email: string, username: string, password:string}): Observable<User> {
    return this.http.post<User>(environment.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/${id}`);
  }
}
