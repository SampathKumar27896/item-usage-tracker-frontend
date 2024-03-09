import { Routes } from '@angular/router';
import { ItemHomePageComponent } from './pages/item-home-page/item-home-page.component';
import { ItemWashPageComponent } from './pages/item-wash-page/item-wash-page.component';
import { ItemIronPageComponent } from './pages/item-iron-page/item-iron-page.component';
import { ItemAddPageComponent } from './pages/item-add-page/item-add-page.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: ItemHomePageComponent,
        title: 'Home Page',
    },
    {
        path: 'wash',
        component: ItemWashPageComponent,
        title: 'Wash Page'
    },
    {
        path: 'iron',
        component: ItemIronPageComponent,
        title: 'Iron Page'
    },
    {
        path: 'item-add',
        component: ItemAddPageComponent,
        title: 'Add Item'
    }
];

export default routeConfig;