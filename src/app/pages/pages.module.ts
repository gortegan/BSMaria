import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PAGES_ROUTING } from './pages.routes';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTING
  ],
  declarations: [
    PagenotfoundComponent,
    HomeComponent,
    PagesComponent
  ]
})
export class PagesModule { }
