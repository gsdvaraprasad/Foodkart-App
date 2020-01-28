import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ItemstableComponent } from './itemstable/itemstable.component';
import { CarttableComponent } from './carttable/carttable.component';
import {MatTableDataSource }from '@angular/material/table';
import { CartService } from './cart.service';


/*import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';*/


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ItemsComponent,
    CartComponent,
    ItemstableComponent,
    CarttableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    
   /* HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, {dataEncapsulation : false})*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
