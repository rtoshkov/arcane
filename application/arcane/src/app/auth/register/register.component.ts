import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import {AuthenticationService} from "../../api/authentication.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor( private fb : FormBuilder, private api: AuthenticationService ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.minLength(3), Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required,Validators.required]],
      rePass: [null, Validators.required],
    },{ validator: this.confirmedValidator('password', 'rePass') })
  }

  submit() {
    const data = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }

    this.api.register(data).subscribe({
      next: data => {console.log(data)},
      error: err => {console.log(err.error?.message)}
    })
  }


  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
