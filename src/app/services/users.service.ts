import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLogedIn: Boolean = false;
  refreshStatus = () => {
    if (this.getUser()) this.isLogedIn = true;
    else this.isLogedIn = false;
  };
  getUser = () => {
    const token = localStorage.getItem('token');
    if (token) return jwtDecode(token);
    else return false;
  };

  login = (data: any) => {
    return this.http.post('http://localhost:3000/api/users/login', data);
  };
  constructor(private http: HttpClient) {}
}
