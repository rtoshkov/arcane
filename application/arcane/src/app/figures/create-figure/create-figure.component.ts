import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FiguresService} from "../../api/figures.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-figure',
  templateUrl: './create-figure.component.html',
  styleUrls: ['./create-figure.component.css']
})
export class CreateFigureComponent implements OnInit {
  createForm!: FormGroup;
  constructor(private fb : FormBuilder, private api: FiguresService, private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: [null, [Validators.minLength(3), Validators.required]],
      image: [null, [Validators.required, Validators.pattern(/^https?:\/\//)]],
      resin: null,
      description: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  submit(){
    const data = {
      name: this.createForm.value.name,
      image: this.createForm.value.image,
      resin: this.createForm.value.resin,
      description: this.createForm.value.description,
    }

    this.api.createPost$(data).subscribe({
      next: data => {
        this.router.navigate([`/details/${data._id}`])
      },
      error: err => {console.log(err.error?.message)}
    })
  }

}
