import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AddItemButtonComponent } from '../add-item-button/add-item-button.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item-tab-group',
  standalone: true,
  imports: [MatTabsModule, AddItemButtonComponent, MatCardModule],
  templateUrl: './item-tab-group.component.html',
  styleUrl: './item-tab-group.component.scss'
})
export class ItemTabGroupComponent {

}
