import { Injectable } from '@angular/core';
import {Item} from './itemclass';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Item[] = [];
  p: Item ;
  l : boolean = false;
  index : number = -1;
  
    addToCart(product) {
      console.log("adding");

      this.items.push(product);
      this.l = true;
      this.p = product;
      
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
    removeCart(product){

     this.index = this.items.indexOf(product);
      if (this.index > -1) {
        this.items.splice(this.index, 1);
      }
      console.log(this.items);
    }
      addPrices() {
        /*var total = 0;

      for (var price in this.items) {
        total += this.items[price];
         }
         return total; */
         var Total = this.items.reduce(function(prev, cur) {
          return prev + cur.price;
        }, 0);
        return Total;
      }
      constructor( ) {}
    }
  

  
   
  
  
