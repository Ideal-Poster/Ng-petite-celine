import { MailChimpApiService } from './../services/mail-chimp-api.service';
import { FormControl, Validators, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SongListComponent } from '../song-list/song-list.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  entryComponents: [SongListComponent],
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
  // @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  @ViewChild('f') subform: NgForm;
	error = '';
  title = 'Celine';
  isModalShown: boolean;
  // mailChimpEndpoint = 'https://petiteceline.us17.list-manage.com/subscribe/post-json?u=4c131a3932ca2dd768c590f9b&amp;id=c760b1311e';
  submitted = false;
  signupForm: FormGroup;

  constructor(private cookieService: CookieService, private http: HttpClient, private mailChimp: MailChimpApiService) {
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
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      })
    });
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {

    console.log(this.signupForm.value.userData);
    this.signupForm.reset();
    // const subscriber = new EmailSubscriber(this.subform.value.firstname, this.subform.value.latname, this.subform.value.email);
    this.http
      .post<{ message: string }>("http://localhost:3000/emailSub", { id: 'null', title: 'title', content: 'content' })
      .subscribe(responseData => {
        console.log(responseData.message);
        // this.posts.push(post);
        // this.postsUpdated.next([...this.posts]);
      });
    // .subscribe(response => {
    //   if (response.result && response.result !== 'error') {
    //     this.submitted = true;
    //   } else {
    //     this.error = response.msg;
    //   }
    // }, error => {
    //   console.error(error);
    //   this.error = 'Sorry, an error occurred.';
    // });
  }


}
