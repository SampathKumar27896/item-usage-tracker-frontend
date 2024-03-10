import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-item-add-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './item-add-form.component.html',
  styleUrl: './item-add-form.component.scss',
})
export class ItemAddFormComponent {
 
}
