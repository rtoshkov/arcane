import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces/user";
import {ILogin} from "../interfaces/login";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register$(data: ILogin){
    const url = 'http://127.0.0.1:3030/users/register'
    return this.http.post<IUser>(url, data);
  }

  login$(data: ILogin){
    const url = 'http://127.0.0.1:3030/users/login'
    return this.http.post<IUser>(url, data);
  }

  logout$():void{
    const url = 'http://127.0.0.1:3030/users/logout'
    this.http.get(url);
    return;
  }
}

