import { Routes } from '@angular/router';
import { ItemHomePageComponent } from './item-home-page/item-home-page.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: ItemHomePageComponent,
        title: 'Home Page'
    }
];

export default routeConfig;