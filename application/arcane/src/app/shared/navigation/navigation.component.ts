import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isLogged!: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe((data) => {this.isLogged = !!data});
  }
}
