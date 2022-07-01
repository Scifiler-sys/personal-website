import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", component:AppComponent},
  {
    path:"wedding",
    loadChildren: () => import("./wedding/wedding.module").then(m => m.WeddingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
