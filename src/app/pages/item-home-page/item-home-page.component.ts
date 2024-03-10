import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import  { AddItemButtonComponent } from '../../components/add-item-button/add-item-button.component';
import { RouterLink } from '@angular/router';
import { ItemAddFormComponent } from '../../components/item-add-form/item-add-form.component';

@Component({
  selector: 'app-item-home-page',
  standalone: true,
  imports: [AddItemButtonComponent, RouterLink, ItemAddFormComponent],
  templateUrl: './item-home-page.component.html',
  styleUrl: './item-home-page.component.scss',
})
export class ItemHomePageComponent {

}
