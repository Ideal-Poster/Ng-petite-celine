import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';

import { HttpErrorHandler } from '../http-error-handler.service';
import { MailChimpApiService } from './services/mail-chimp-api.service';

import { MessageService } from '../message.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MusicPageComponent } from './music-page/music-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ArtPageComponent } from './art-page/art-page.component';

import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { MDBSpinningPreloader } from './typescripts/pro/index';

import { CookieModule } from 'ngx-cookie';
import { FooterComponent } from './footer/footer.component';
import { ActingPageComponent } from './acting-page/acting-page.component';

const appRoutes: Routes = [
  { path: '', component: MusicPageComponent },
  { path: 'art', component: ArtPageComponent },
  { path: 'acting', component: ActingPageComponent },
  { path: '', redirectTo: '/music ', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MusicPageComponent,
    NavMenuComponent,
    ArtPageComponent,
    FooterComponent,
    ActingPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    CookieModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    MailChimpApiService,
    HttpErrorHandler,
    MessageService,
    MDBSpinningPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
