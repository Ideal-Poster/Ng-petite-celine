import { Component } from '@angular/core';
import { MailChimpApiService } from "./services/mail-chimp-api.service";
import { initializeApp, database } from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailChimpApiService]
})
export class AppComponent {
  title = 'app';

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBbnBsnG-nkNirLzcMw_LQw3VdVN3Y_WeY",
      authDomain: "petite-celine.firebaseapp.com",
      databaseURL: "https://petite-celine.firebaseio.com",
      projectId: "petite-celine",
      storageBucket: "petite-celine.appspot.com",
      messagingSenderId: "748301447984"
    };
    initializeApp(config);

    var root = database().ref();

    root.on('value', function(snap) {
      console.log(snap.val());
    });


  }
}
