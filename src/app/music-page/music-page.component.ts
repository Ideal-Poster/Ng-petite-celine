// import { MDBBootstrapModule, ModalDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
  // @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown = true;


  ngOnInit() {
    // mailModal.show()
  }


}
