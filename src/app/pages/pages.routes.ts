import { TicketsComponent } from './tickets/tickets.component';
import { ContacteComponent } from './contacte/contacte.component';
import { DolorsComponent } from './dolors/dolors.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { EdificiComponent } from './edifici/edifici.component';

const PAGES_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dolors', component: DolorsComponent},
  {path: 'edifici', component: EdificiComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: '**', component: PagenotfoundComponent},
];

export const PAGES_ROUTING = RouterModule.forRoot(PAGES_ROUTES, {useHash: true});
