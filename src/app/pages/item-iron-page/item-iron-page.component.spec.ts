import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIronPageComponent } from './item-iron-page.component';

describe('ItemIronPageComponent', () => {
  let component: ItemIronPageComponent;
  let fixture: ComponentFixture<ItemIronPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemIronPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemIronPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
