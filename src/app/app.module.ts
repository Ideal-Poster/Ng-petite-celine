import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailSubModalComponent } from './email-sub-modal/email-sub-modal.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "./material/material.module";


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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
