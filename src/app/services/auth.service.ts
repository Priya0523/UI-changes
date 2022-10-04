import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { USER_URL } from '../shared/constants/api-url.constants';
import { environment } from '../shared/environment/environment';
import { StockHttpService } from './stock-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public token: any;
  url = environment.url;

  private loggedIn = false;

  constructor(private http: HttpClient) {
    console.log("entered auth service");
    
   }

  public login(userName: string, password: string) {
    console.log("entered login method");
    
    let UserLogin =
    {
      userName: userName,
      password: password
    }
    return this.http
      .post(USER_URL.LOGIN, UserLogin)
      .pipe(map(data => (data = JSON.parse(JSON.stringify(data)))));
  }

  public storeUserData(fullName: string, email: string, username: string, token: string) {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("loginId", username);
    localStorage.setItem("token", token);
  }

  public isLoggedIn() {
    if (localStorage.getItem("loginId")){
      return (this.loggedIn = true);
    }
    return this.loggedIn = false;
  }

  public logout() {
    localStorage.clear();
    this.loggedIn = false;
  }
}
  