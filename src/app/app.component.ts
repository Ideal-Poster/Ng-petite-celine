import { Component, OnInit } from '@angular/core';
import { MailChimpApiService } from './services/mail-chimp-api.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailChimpApiService]
})
export class AppComponent {
  constructor() { }
}
