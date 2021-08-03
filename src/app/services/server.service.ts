import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  getBooks = () => {
    return this.http.get('http://localhost:3000/api/books/getBooks');
  };

  signUp = (data: any) => {
    return this.http.post('http://localhost:3000/api/users/signup', data);
  };
  constructor(private http: HttpClient) {}
}
