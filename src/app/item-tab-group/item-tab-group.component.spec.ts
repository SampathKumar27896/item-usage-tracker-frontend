import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabGroupComponent } from './item-tab-group.component';

describe('ItemTabGroupComponent', () => {
  let component: ItemTabGroupComponent;
  let fixture: ComponentFixture<ItemTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTabGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
