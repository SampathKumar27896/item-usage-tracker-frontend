import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrackerTabsComponent } from './item-tracker-tabs.component';

describe('ItemTrackerTabsComponent', () => {
  let component: ItemTrackerTabsComponent;
  let fixture: ComponentFixture<ItemTrackerTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTrackerTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemTrackerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
