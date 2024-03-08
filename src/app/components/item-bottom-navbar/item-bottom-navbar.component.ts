import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-item-bottom-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './item-bottom-navbar.component.html',
  styleUrl: './item-bottom-navbar.component.scss'
})
export class ItemBottomNavbarComponent {

}
