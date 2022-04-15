import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post";
import {IFigure} from "../interfaces/figure";
import {ICreatePost} from "../interfaces/create-post";
import {IComment} from "../interfaces/comment";

@Injectable({
  providedIn: 'root'
})
export class FiguresService {
  constructor(private http: HttpClient) {}

  getAllPosts$(): Observable<IPost[]>{
    const url = 'http://127.0.0.1:3030/figures'
    return this.http.get<IPost[]>(url);
  }

  createPost$(data:ICreatePost): Observable<IPost>{
    const url = 'http://127.0.0.1:3030/figures'
    return this.http.post<IPost>(url, data);
  }

  getPost$(id:string): Observable<IFigure>{
    const url = `http://127.0.0.1:3030/figures/${id}`
    return this.http.get<IFigure>(url);
  }

  editPost$(id:string, data:ICreatePost): Observable<IPost>{
    const url = `http://127.0.0.1:3030/figures/${id}`
    return this.http.post<IPost>(url, data);
  }

  deletePost$(id:string){
    const url = `http://127.0.0.1:3030/figures/${id}`
    return this.http.delete<IPost>(url);
  }

  postComment$(id:string, data:IComment){
    const url = `http://127.0.0.1:3030/figures/comment/${id}`
    return this.http.post<IPost>(url, data);
  }

}
