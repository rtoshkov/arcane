import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../api/authentication.service";
import {IProfile} from "../../interfaces/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: IProfile;
  constructor(
    private route : ActivatedRoute,
    private api: AuthenticationService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.api.userFigures$(id).subscribe(data => this.profile = (data))
  }

}
