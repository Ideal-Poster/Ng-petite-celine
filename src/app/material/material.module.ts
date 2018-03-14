import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmailSubModalComponent } from "../email-sub-modal/email-sub-modal.component";
import {
  MatDialogModule,
  MatDialogConfig,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule
  ],
  declarations: [
  ],
  entryComponents: [
    EmailSubModalComponent
  ],
  providers: [
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class MaterialModule { }
