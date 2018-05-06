import { PagesModule } from './pages/pages.module';
import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {TranslateModule} from 'ng2-translate';
import {TranslateLoader} from 'ng2-translate';
import {TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
