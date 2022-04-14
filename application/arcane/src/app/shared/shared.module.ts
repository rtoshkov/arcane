import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    CardComponent,
  ]
})
export class SharedModule { }
