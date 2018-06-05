// import { MDBBootstrapModule, ModalDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchBoxCmp } from '../tablist/searchbox.component';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  entryComponents: [SearchBoxCmp],
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
  // @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  title = 'Celine';

  public isModalShown = false;

  ngOnInit() {
    // mailModal.show()
  }


}
