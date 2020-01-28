import { Component, OnInit, ViewChild } from '@angular/core';
import { items} from '../data';
import {Item} from '../itemclass';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartService} from '../cart.service';
import { MatTable } from '@angular/material';


@Component({
  selector: 'app-itemstable',
  templateUrl: './itemstable.component.html',
  styleUrls: ['./itemstable.component.css']
})
export class ItemstableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'Action'];
  dataSource = items;
  i;
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  constructor(private cs: CartService) { }

  ngOnInit() {
  }
  addtocart(i)
  {
    window.alert("Selected Item Successfully added to cart");
    this.cs.addToCart(i);

  }

}
