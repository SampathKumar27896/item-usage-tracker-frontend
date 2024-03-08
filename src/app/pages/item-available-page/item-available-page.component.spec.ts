import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAvailablePageComponent } from './item-available-page.component';

describe('ItemAvailablePageComponent', () => {
  let component: ItemAvailablePageComponent;
  let fixture: ComponentFixture<ItemAvailablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAvailablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemAvailablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
