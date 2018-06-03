import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { MailChimpApiService } from './services/mail-chimp-api.service';

import {PlaylistService} from './services/playlist.service';
import {SoundCloudSearch} from './services/soundcloud-search.service';
import {PlayerCmp} from './player/player.component';
import {TabListCmp} from './tablist/tablist.component';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailChimpApiService]
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }
}
