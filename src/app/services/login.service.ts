import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './exam-book.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public generateToken(loginUserData: any) {
    console.log(loginUserData);
    console.log(`${baseUrl}/generate-token`);
    
    return this.http.post(`${baseUrl}/generate-token`, loginUserData)
  }

  // set token in localstorage
  public loginUser(token) {
    localStorage.setItem('exambook-token', token)
    return true
  }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`)
  }

  public isLoggedIn() {
    const token = this.getToken()
    if (token === undefined || token === null || token === '') {
      return false;
    }

    return true
  }

  public logoutUser() {
    localStorage.removeItem('exambook-token')
    localStorage.removeItem('exambook-user')
    return true
  }

  public getToken() {
    return localStorage.getItem('exambook-token')
  }

  public setUser(user) {
    localStorage.setItem('exambook-user', JSON.stringify(user))
  }

  public getUser() {
    const user = localStorage.getItem('exambook-user')
    if (user != null) {
      return JSON.parse(user)
    }

    this.logoutUser()
    return null;
  }
 
  public getUserRole() {
    const user = this.getUser()
    if (user === null) {
      return null;
    }
    return user.authorities[0].authority
  }

  public isAdmin() {
    const role = this.getUserRole()
    if (role === null || role === 'NON_ADMIN') {
      return false;
    }

    return true;
  }
}
