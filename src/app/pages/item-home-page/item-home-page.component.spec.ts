import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHomePageComponent } from './item-home-page.component';

describe('ItemHomePageComponent', () => {
  let component: ItemHomePageComponent;
  let fixture: ComponentFixture<ItemHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
