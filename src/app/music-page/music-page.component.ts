import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmailSubModalComponent } from '../email-sub-modal/email-sub-modal.component';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
  email: string;
  panelOpenState = false;

  constructor(public dialog: MatDialog) {
    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmailSubModalComponent, {
      width: '580px',
      data: { email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }

  ngOnInit() {
  }

}
