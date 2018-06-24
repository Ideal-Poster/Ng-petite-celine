import { SoundManager } from './services/soundmanager.service';

import { Component } from '@angular/core';
import { MailChimpApiService } from './services/mail-chimp-api.service';
import { Router, Event, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailChimpApiService]
})

export class AppComponent {
  constructor(private router: Router, private soundManager: SoundManager ) {
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.soundManager.pause();
      }
    });
   }
}
