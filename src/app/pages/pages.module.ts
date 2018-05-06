import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PAGES_ROUTING } from './pages.routes';
import { DolorsComponent } from './dolors/dolors.component';
import { EdificiComponent } from './edifici/edifici.component';
import { ContacteComponent } from './contacte/contacte.component';
import { TicketsComponent } from './tickets/tickets.component';
import {TranslateModule} from 'ng2-translate';
import {TranslateLoader} from 'ng2-translate';
import {TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTING,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
})
  ],
  declarations: [
    PagenotfoundComponent,
    HomeComponent,
    PagesComponent,
    DolorsComponent,
    EdificiComponent,
    ContacteComponent,
    TicketsComponent
  ]
})
export class PagesModule { }
