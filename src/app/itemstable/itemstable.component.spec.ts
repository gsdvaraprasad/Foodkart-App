import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemstableComponent } from './itemstable.component';

describe('ItemstableComponent', () => {
  let component: ItemstableComponent;
  let fixture: ComponentFixture<ItemstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
