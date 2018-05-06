import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public router: Router, private translate: TranslateService) {
    if (!localStorage.getItem('lang')) {
      translate.addLangs(['es', 'cat', 'fr', 'es']);
      translate.setDefaultLang('cat');
      const browserlang = translate.getBrowserLang();
      const lang = browserlang.match(/es|en|fr|cat/) ? browserlang : 'es';
      translate.use(lang);
      localStorage.setItem('lang', lang);
    } else {
      const lang = localStorage.getItem('lang');
      translate.use(lang.match(/es|en|fr|cat/) ? lang : 'es');
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }

}
