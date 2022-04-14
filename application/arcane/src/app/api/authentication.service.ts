import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(data: any){
    const url = 'http://127.0.0.1:3030/users/register'
    return this.http.post<any[]>(url, data);
  }

  login(data: any){
    const url = 'http://127.0.0.1:3030/users/login'
    return this.http.post<any[]>(url, data);
  }
}

