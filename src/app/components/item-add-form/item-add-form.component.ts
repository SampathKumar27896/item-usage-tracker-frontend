import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-item-add-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './item-add-form.component.html',
  styleUrl: './item-add-form.component.scss',
})
export class ItemAddFormComponent {
  addItemFormGroup = new FormGroup({ 
    name: new FormControl(''),
    description: new FormControl(''),
  });
  onSubmit() {
    console.log(this.addItemFormGroup.value);
  }
}
