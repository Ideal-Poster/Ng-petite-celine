import {
  CookieService
} from 'ngx-cookie';
import {
  Component,
  OnInit
} from '@angular/core';
// import { Observable } from 'rxjs';
import {
  initializeApp,
  database
} from 'firebase';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import {
  MailChimpApiService
} from './services/mail-chimp-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailChimpApiService]
})
export class AppComponent implements OnInit {
  constructor(db: AngularFirestore, private _cookieService: CookieService) {
    // this._cookieService.get()
  }

  ngOnInit() {
    this._cookieService.put('greeting', 'hello');

    console.log(
      this._cookieService.get('greeting')
    );
  }
}
