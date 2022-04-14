import { Component, OnInit } from '@angular/core';
import {FiguresService} from "../../api/figures.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards!: any[];
  constructor(private api: FiguresService) { }

  ngOnInit(): void {
    this.api.getAllPosts().subscribe(data => {this.cards = (data).slice(-4)})
  }
}
