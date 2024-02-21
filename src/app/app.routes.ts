import { Routes } from '@angular/router';

import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductdetailComponent } from './products/productdetail/productdetail.component';

export const routes: Routes = [
    { path : '', component: WishComponent },
    { path : 'contact', component: ContactComponent },
    { path : 'products', component: ProductListComponent },
    { path : 'products/:id', component: ProductdetailComponent },
    { path : '**', component: NotFoundComponent },
];
