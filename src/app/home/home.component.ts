import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { EmailSubModalComponent } from "../email-sub-modal/email-sub-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;

  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(EmailSubModalComponent, {
      width: '500px',
      data: { email: this.email }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }

  ngOnInit() {
  }

}
