import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { initializeApp, database } from "firebase";

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MailChimpApiService } from "./services/mail-chimp-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailChimpApiService]
})
export class AppComponent {
  private coursesCollection: AngularFirestoreCollection<any>;
  courses$: Observable<any>;
  constructor(db: AngularFirestore) {
    this.coursesCollection = db.collection<any>('courses');
    this.courses$ = this.coursesCollection.valueChanges();
    console.log(this.courses$.subscribe(
      val => console.log(val)
    ));
  }
}
