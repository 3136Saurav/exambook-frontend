import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './exam-book.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post(baseUrl + `/users/`, user)
  }
}
