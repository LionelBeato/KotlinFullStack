import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import {FruitComponent} from './fruit/fruit.component';


const routes: Routes = [
  { path: 'fruit-list', component: FruitListComponent },
  { path: 'fruit', component: FruitComponent },
  { path: 'fruit/:id', component: FruitComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
