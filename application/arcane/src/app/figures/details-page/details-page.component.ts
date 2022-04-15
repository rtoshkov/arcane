import { Component, OnInit, ViewChild} from '@angular/core';
import {FiguresService} from "../../api/figures.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {IFigure} from "../../interfaces/figure";
import {UserService} from "../../user.service";
import {IUser} from "../../interfaces/user";
import {NotificationService} from "../../notification.service";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{

  figure!: IFigure;
  editMode: boolean = false;
  editForm!: FormGroup;
  @ViewChild('commentForm') commentForm!: NgForm
  user!: IUser | undefined

  constructor(
    private api: FiguresService,
    private route: ActivatedRoute,
    private fb : FormBuilder,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
  ){}

  getPost(){
    const id = this.route.snapshot.params['id']
    this.api.getPost$(id).subscribe((data) => {this.figure = data});
    this.user = this.userService.retrieveData();
  }

  ngOnInit(): void {
    this.getPost();
  }

  submitComment(){
    console.log(this.commentForm.value);
    const result = this.commentForm.value;
    const data = {
      text: this.commentForm.value.text
    }
    this.api.postComment$(this.figure._id, data).subscribe({
      next: data => {
        this.commentForm.reset();
        this.getPost();
        this.router.navigate([`/details/${this.figure._id}`]);
      },
      error: err => {this.notificationService.sendAlert(err.error?.message)}
    })
  }

  submitEdit(){
    const data = {
      name: this.editForm.value.name,
      image: this.editForm.value.image,
      resin: this.editForm.value.resin,
      description: this.editForm.value.description,
    }
    this.api.editPost$(this.figure._id, data).subscribe({
      next: data => {
        this.editModeSwitch(false);
        this.getPost();
        this.router.navigate([`/details/${this.figure._id}`]);
      },
      error: err => {this.notificationService.sendAlert(err.error?.message)}
    })
  }

  delete(){
    const confirmation = confirm('Delete?')
    if(confirmation){
      this.api.deletePost$(this.figure._id).subscribe({
        next: data => {
          this.editModeSwitch(false);
          this.router.navigate(['/all-figures']);
        },
        error: err => {this.notificationService.sendAlert(err.error?.message)}
      })
    }
  }

  editModeSwitch(value:boolean){
    this.editMode = value;
    if(this.editMode){
      this.editForm = this.fb.group({
        name: [null, [Validators.minLength(3), Validators.required]],
        image: [null, [Validators.required, Validators.pattern(/^https?:\/\//)]],
        resin: null,
        description: [null, [Validators.required, Validators.minLength(10)]]
      })
      this.editForm.patchValue({
        name: this.figure.name,
        image: this.figure.image,
        resin:this.figure.resin,
        description: this.figure.description,
      })
    }
  }
}
