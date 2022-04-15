import { Component, OnInit } from '@angular/core';
import {FiguresService} from "../../api/figures.service";
import {IFigure} from "../../interfaces/figure";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards!: IFigure[];

  constructor(
    private api: FiguresService
  ){}

  ngOnInit(): void {
    this.api.getAllPosts$().subscribe(data => {this.cards = (data).slice(-4)})
  }
}
