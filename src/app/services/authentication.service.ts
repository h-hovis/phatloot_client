import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:3000/login', { username, password});
  }

  signUp(user: any) {
    return this.http.post('http://localhost:3000/users', user);
  }
}
