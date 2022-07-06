import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RSVPComponent } from './components/rsvp/rsvp.component';
import { WeddingComponent } from './wedding.component';

const routes: Routes = [
  {
    path:"", 
    component: WeddingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
