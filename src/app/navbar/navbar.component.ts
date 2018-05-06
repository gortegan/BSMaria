import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
declare function closeMenu();
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .lang ul li{
      cursor: pointer;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    closeMenu();
  }

}
