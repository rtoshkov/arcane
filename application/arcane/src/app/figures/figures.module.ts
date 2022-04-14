import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFiguresComponent } from './all-figures/all-figures.component';
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    AllFiguresComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FiguresModule { }
