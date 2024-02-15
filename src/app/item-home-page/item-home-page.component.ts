import { Component } from '@angular/core';
import { ItemTabGroupComponent } from '../item-tab-group/item-tab-group.component';
@Component({
  selector: 'app-item-home-page',
  standalone: true,
  imports: [ ItemTabGroupComponent ],
  templateUrl: './item-home-page.component.html',
  styleUrl: './item-home-page.component.css'
})
export class ItemHomePageComponent {

}
