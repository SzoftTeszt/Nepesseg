import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatokComponent } from './adatok/adatok.component';
import { UjFelmeresComponent } from './uj-felmeres/uj-felmeres.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"adatok", component:AdatokComponent},
  {path:"ujfelmeres", component:UjFelmeresComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
