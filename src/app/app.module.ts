import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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

@NgModule({
  declarations: [
    AppComponent,
    MusicPageComponent,
    NavMenuComponent,
    ArtPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    MailChimpApiService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
