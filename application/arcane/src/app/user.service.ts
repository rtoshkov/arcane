import { Injectable } from '@angular/core';
import {IUser} from "./interfaces/user";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser$: BehaviorSubject<IUser | undefined> = new BehaviorSubject<IUser | undefined>(this.isLogged());
  currentUser = this.currentUser$.asObservable();
  constructor() { }


  isLogged(){
    return this.retrieveData();
  }

  saveUserData(user: IUser): void{
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser$?.next(user)
  }

  retrieveData(): IUser | undefined {
    const result = localStorage.getItem('user');
    if(result){
      return JSON.parse(result);
    }
    return;
  }

  clearData(): void {
    localStorage.removeItem('user');
    this.currentUser$.next(undefined)
    return;
  }
}


