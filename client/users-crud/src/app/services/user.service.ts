import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = 'http://localhost:4000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.API}/`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.API}/getUser/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API}/create`, user, this.httpOptions);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.post<User>(`${this.API}/update/${id}`, user, this.httpOptions);
  }

  deleteUser(id: string): Observable<User> {
    console.log(id);
    return this.http.delete<User>(`${this.API}/delete/${id}`, this.httpOptions);
  }
}
