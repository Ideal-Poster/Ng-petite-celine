// import { MDBBootstrapModule, ModalDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchBoxCmp } from '../tablist/searchbox.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  entryComponents: [SearchBoxCmp],
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
  // @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  title = 'Celine';
  isModalShown: boolean;

  constructor(private cookieService: CookieService) {

    if (!cookieService.check('modalCookie')) {
      this.isModalShown = true;
      console.log(cookieService.get('modal'));
      cookieService.set('modalCookie', 'visited', 1);
      // cookieService.deleteAll();
    } else {
      this.isModalShown = false;
    }

  }

  ngOnInit() {

  }


}
