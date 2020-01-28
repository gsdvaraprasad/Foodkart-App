import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent } from './cart/cart.component';
import {ItemsComponent} from './items/items.component';


const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  {path: 'cart' , component: CartComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
