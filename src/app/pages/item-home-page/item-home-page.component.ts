import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import  { AddItemButtonComponent } from '../../components/add-item-button/add-item-button.component';
import { RouterLink } from '@angular/router';
import { ItemAddFormComponent } from '../../components/item-add-form/item-add-form.component';
import {MatCardModule} from '@angular/material/card';
import Item  from './item.interface';
@Component({
  selector: 'app-item-home-page',
  standalone: true,
  imports: [AddItemButtonComponent,
     RouterLink, 
     ItemAddFormComponent,
     MatCardModule],
  templateUrl: './item-home-page.component.html',
  styleUrl: './item-home-page.component.scss',
})
export class ItemHomePageComponent {
  cardsList: Item[] = [
    {
      name: "Shirt",
      description: "The yellow colored shirt"
    },
    {
      name: "Phone",
      description: "POCO F5"
    },
    {
      name: "Charger",
      description: "The charger for the phone POCO F5"
    },
    {
      name: "Wallet",
      description: "Money wallet"
    },
    {
      name: "Headphones",
      description: "Headphones for listening music"
    },
    {
      name: "Plate",
      description: "Plate used to eat meals"
    }
  ];
  
}
