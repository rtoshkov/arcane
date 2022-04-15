import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  notification = this.notification$.asObservable();

  constructor() {
  }

  sendAlert(message: string) {
    this.notification$.next(message);

    setInterval(() => this.notification$.next(undefined), 5000)
  }
}
