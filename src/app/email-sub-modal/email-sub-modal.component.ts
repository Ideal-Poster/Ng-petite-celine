import { Component, Inject, ViewChild  } from '@angular/core';
import { MusicPageComponent } from '../music-page/music-page.component';
import { NgForm } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MailChimpApiService } from '../services/mail-chimp-api.service';
import { EmailSubscriber } from '../models/emailSubscriber';


@Component({
  selector: 'app-email-sub-modal',
  templateUrl: './email-sub-modal.component.html',
  styles: [`
    .modal-form-field {
      width: 100%;
    }
    .buttons {
      padding-bottom: 30px;
    }
    `]
})
export class EmailSubModalComponent {
  @ViewChild('f') subform: NgForm;
  constructor(
    public dialogRef: MatDialogRef<EmailSubModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mailChimp: MailChimpApiService
  ) {
    this.getList();
  }

  getList() {
    // this.mailChimp.getList()
    //   .subscribe(list => {
    //     console.log(list)
    //   });
  }

  onSubmit() {
    const subscriber = new EmailSubscriber(this.subform.value.firstname, this.subform.value.latname, this.subform.value.email);
    this.mailChimp.addSubscriber(subscriber)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
