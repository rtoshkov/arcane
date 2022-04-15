import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFiguresComponent } from './all-figures/all-figures.component';
import {SharedModule} from "../shared/shared.module";
import { CreateFigureComponent } from './create-figure/create-figure.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AllFiguresComponent,
    CreateFigureComponent,
    DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FiguresModule { }
