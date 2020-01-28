import { Component, OnInit, ViewChild } from '@angular/core';
import {CartService} from '../cart.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { MatTableDataSource} from '@angular/material/table';
import { Item } from '../itemclass';
import { MatTable } from '@angular/material';
import { items } from '../data';


@Component({
  selector: 'app-carttable',
  templateUrl: './carttable.component.html',
  styleUrls: ['./carttable.component.css']
})
export class CarttableComponent implements OnInit {
  cartitems;
  c;
  dataSource = [];
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  

  constructor(private cs: CartService) { }

  ngOnInit() {
    
  }

  getItems() {
    if( this.cs.l == true) {
     this.dataSource = this.dataSource.concat(this.cs.p);
     this.cs.l =false;
 }

 return this.dataSource;
  }
  
  removeitem(c)
  {
    window.alert("Selected Item Successfully Removed From Cart");
    this.cs.removeCart(c);
    //this.dataSource.splice(this.cs.index,1);
    this.dataSource.splice(this.cs.index , 1);
    this.cs.index = -1;
    
  }
  Total()
  {
    return this.cs.addPrices();
  }
  displayedColumns: string[] = ['name', 'price', 'Action'];
  
 
  
  

  


  }
  
  

  
  

  


