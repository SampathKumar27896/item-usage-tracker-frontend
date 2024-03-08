import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemBottomNavbarComponent } from '../../components/item-bottom-navbar/item-bottom-navbar.component';

@Component({
  selector: 'app-item-home-page',
  standalone: true,
  imports: [ ItemBottomNavbarComponent, NgFor],
  templateUrl: './item-home-page.component.html',
  styleUrl: './item-home-page.component.scss'
})
export class ItemHomePageComponent {
 
}
