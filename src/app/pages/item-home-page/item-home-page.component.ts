import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import  { AddItemButtonComponent } from '../../components/add-item-button/add-item-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-home-page',
  standalone: true,
  imports: [AddItemButtonComponent, RouterLink],
  templateUrl: './item-home-page.component.html',
  styleUrl: './item-home-page.component.scss'
})
export class ItemHomePageComponent {

  @Input() 
  variable = "somevalue";

  ngOnInit() {
    console.log("Hello world from onit");
  }
  ngOnChanges(changes: SimpleChanges) {
  
      console.log("coming on changes",changes)
  }
}
