import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingComponent } from './wedding.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RSVPComponent } from './components/rsvp/rsvp.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ImageLoadedDirectiveDirective } from './components/directives/image-loaded-directive.directive';


@NgModule({
  declarations: [
    WeddingComponent,
    NavBarComponent,
    RSVPComponent,
    LoadingSpinnerComponent,
    ImageLoadedDirectiveDirective
  ],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
