import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public languages = [
    {
      languageName: 'English',
      languageCode: 'en'
    },
    {
      languageName: 'Hindi',
      languageCode: 'hi'
    },
    {
      languageName: 'Punjabi',
      languageCode: 'pa'
    }
  ];
  public selectedLanguage = 'English';
  @Output() passLanguage = new EventEmitter<any>();

  constructor(translate: TranslateService) {
    translate
  }

  ngOnInit(): void {
  }

  selectLanguage(item) {
    this.selectedLanguage = item.languageName;
    this.passLanguage.emit(item);
  }

}
