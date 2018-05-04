import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';

const PAGES_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: PagenotfoundComponent},
];

export const PAGES_ROUTING = RouterModule.forRoot(PAGES_ROUTES, {useHash: true});