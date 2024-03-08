import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBottomNavbarComponent } from './item-bottom-navbar.component';

describe('ItemBottomNavbarComponent', () => {
  let component: ItemBottomNavbarComponent;
  let fixture: ComponentFixture<ItemBottomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBottomNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemBottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
