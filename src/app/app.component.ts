import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
declare let $: any;
declare let window: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;
    formModal: any;

    constructor(private router: Router, public translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

    ngOnInit() {
        this.recallJsFuntions();

        this.formModal = new window.bootstrap.Modal(
            document.getElementById('staticBackdrop')
          );
          this.formModal.show();
    }

    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    $('.loader').fadeIn('slow');
                }
            });
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
            .subscribe(event => {
                $.getScript('../assets/js/custom.js');
                $('.loader').fadeOut('slow');
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

    selectedLanguage(event) {
        console.log('eeeeeeeeeeeeeeeeee :::::::::: ', event);
        this.translate.setDefaultLang(event.languageCode);
        this.translate.use(event.languageCode);
    }

    reload(){
        window.location.reload();
    }
}