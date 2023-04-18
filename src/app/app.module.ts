import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AttorneyComponent } from './components/pages/attorney/attorney.component';
import { AttorneyDetailsComponent } from './components/pages/attorney-details/attorney-details.component';
import { CaseStudyComponent } from './components/pages/case-study/case-study.component';
import { CaseStudyDetailsComponent } from './components/pages/case-study-details/case-study-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PracticeComponent } from './components/pages/practice/practice.component';
import { PracticeDetailsComponent } from './components/pages/practice-details/practice-details.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { TestimonialComponent } from './components/pages/testimonial/testimonial.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    AboutComponent,
    AttorneyComponent,
    AttorneyDetailsComponent,
    CaseStudyComponent,
    CaseStudyDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    PracticeComponent,
    PracticeDetailsComponent,
    AppointmentComponent,
    TestimonialComponent,
    FaqComponent,
    ErrorComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
  })
  ],
  providers: [ {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

