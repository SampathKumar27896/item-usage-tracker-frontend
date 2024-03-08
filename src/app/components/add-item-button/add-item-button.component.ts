import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-item-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-item-button.component.html',
  styleUrl: './add-item-button.component.scss'
})
export class AddItemButtonComponent {

}
 