import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWashPageComponent } from './item-wash-page.component';

describe('ItemWashPageComponent', () => {
  let component: ItemWashPageComponent;
  let fixture: ComponentFixture<ItemWashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemWashPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemWashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
