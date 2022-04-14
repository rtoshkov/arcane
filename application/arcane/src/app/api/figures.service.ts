import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FiguresService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]>{
    const url = 'http://127.0.0.1:3030/figures'
    return this.http.get<any[]>(url);
  }
}
