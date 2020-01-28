import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Item} from '../itemclass';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems;
  c;
  total: number;
  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cartitems = this.cs.getItems();
  }
  removeitem(c)
  {
    window.alert("Selected Item Successfully Removed From Cart");
    this.cs.removeCart(c);
  }
  Total()
  {
    return this.cs.addPrices();
  }

}
