import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { firebaseConfig } from "../environments/firebase.config";

import { AppComponent } from './app.component';
import { EmailSubModalComponent } from './email-sub-modal/email-sub-modal.component';
import { HomeComponent } from './home/home.component';
import { HttpErrorHandler } from "../http-error-handler.service";
import { MailChimpApiService } from "./services/mail-chimp-api.service";

import { MaterialModule } from "./material/material.module";
import { MessageService } from "../message.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailSubModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    MailChimpApiService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
