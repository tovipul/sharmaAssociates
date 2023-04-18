import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare let $: any;

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

  constructor(translate: TranslateService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  selectLanguage(item) {
    this.selectedLanguage = item.languageName;
    this.passLanguage.emit(item);
  }

  goToPage(path) {
    console.log(path);
    this.router.navigate([path]);
  }

 
 
 
 

}
