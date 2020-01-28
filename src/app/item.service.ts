import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Item} from './itemclass';
import {items} from './data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getitems() : Observable<Item[]> {
    return of(items);
  }

  constructor() { }
}
