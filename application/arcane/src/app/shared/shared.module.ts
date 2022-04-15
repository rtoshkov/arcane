import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import {RouterModule} from "@angular/router";
import { CommentComponent } from './comment/comment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TextLimiterPipe } from './text-limiter.pipe';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    CardComponent,
    CommentComponent,
    NotFoundComponent,
    TextLimiterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    CardComponent,
    CommentComponent,
  ]
})
export class SharedModule { }
