import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingComponent } from './wedding.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RSVPComponent } from './components/rsvp/rsvp.component';


@NgModule({
  declarations: [
    WeddingComponent,
    NavBarComponent,
    RSVPComponent
  ],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
