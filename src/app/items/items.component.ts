import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../itemclass';
import {CartService} from '../cart.service';
import {items} from '../data'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

it : Item[];
i;
  constructor(private is: ItemService, private cs :CartService) { }

  ngOnInit() {
     this.getdata();
  }
  getdata() :void {
    this.is.getitems().subscribe(items => this.it = items);
  }
  addtocart(i)
  {
    window.alert("Selected Item Successfully added to cart");
    this.cs.addToCart(i);
  }

}
