import { Component } from '@angular/core';
import { ItemAddFormComponent } from '../../components/item-add-form/item-add-form.component';
@Component({
  selector: 'app-item-add-page',
  standalone: true,
  imports: [ItemAddFormComponent],
  templateUrl: './item-add-page.component.html',
  styleUrl: './item-add-page.component.scss'
})
export class ItemAddPageComponent {

}
