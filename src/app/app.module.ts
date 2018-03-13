import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailSubModalComponent } from './email-sub-modal/email-sub-modal.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpErrorHandler } from "../http-error-handler.service";
import { MessageService } from "../message.service";

import { MailChimpApiService } from "./services/mail-chimp-api.service";



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
    HttpClientModule

  ],
  providers: [
    MailChimpApiService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
