import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmailSubModalComponent } from '../email-sub-modal/email-sub-modal.component';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  panelOpenState: boolean = false;

  constructor(public dialog: MatDialog) {
    // this.openDialog();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(EmailSubModalComponent, {
      width: '580px',
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
