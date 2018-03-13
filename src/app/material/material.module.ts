import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmailSubModalComponent } from "../email-sub-modal/email-sub-modal.component";
import {
  MatDialogModule,
  MatDialogConfig,
  MatInputModule,
  MatButtonModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
  ],
  entryComponents:[
    EmailSubModalComponent
  ],
  providers:[
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class MaterialModule { }
