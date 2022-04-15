import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../api/authentication.service";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private api: AuthenticationService,
    private userService: UserService,
    private route: Router
  ){}

  ngOnInit(): void {
    this.api.logout$();
    this.userService.clearData();
    this.route.navigate(['/home']);
  }

}
