import { Component, Inject, ViewChild  } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { NgForm } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA }  from "@angular/material";

@Component({
  selector: 'app-email-sub-modal',
  templateUrl: './email-sub-modal.component.html',
  styles: [`
    .modal-form-field {
      width: 100%;
    }
    `]
})
export class EmailSubModalComponent {
  @ViewChild('f') subform: NgForm;
  constructor(
    public dialogRef: MatDialogRef<EmailSubModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  onSubmit() {
    console.log(this.subform);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
