import { Component, OnInit } from '@angular/core';
import {FiguresService} from "../../api/figures.service";

@Component({
  selector: 'app-all-figures',
  templateUrl: './all-figures.component.html',
  styleUrls: ['./all-figures.component.css']
})
export class AllFiguresComponent implements OnInit {
  cards!: any[];
  constructor(private api: FiguresService) { }

  ngOnInit(): void {
    this.api.getAllPosts$().subscribe(data => {this.cards = (data)})
  }
}
