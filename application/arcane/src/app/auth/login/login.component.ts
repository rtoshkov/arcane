import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../api/authentication.service";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb : FormBuilder,
    private api: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService,
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null,  Validators.required],
      password: [null, Validators.required],
    })
  }

  submit() {
    const data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }

    this.api.login$(data).subscribe({
      next: data => {
        this.userService.saveUserData(data);
        this.router.navigate(['/home']);
      },
      error: err => {this.notificationService.sendAlert(err.error?.message)}
    })
  }

}
