import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {IUser} from "../../interfaces/user";
import {NotificationService} from "../../notification.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isUser!: IUser | undefined;
  alert!: string | undefined

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ){}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((data) => {this.isUser = data});
    this.notificationService.notification.subscribe((data) => {this.alert = data});
  }
}
