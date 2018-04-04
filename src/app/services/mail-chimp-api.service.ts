import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { catchError } from 'rxjs/operators';

import { EmailSubscriber } from '../models/emailSubscriber';

@Injectable()
export class MailChimpApiService {
  private handleError: HandleError;

  constructor(private http: HttpClient,
                      httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('getList');
    console.log('ApiService is Ready...');
  }

  addSubscriber(subscriberInfo: EmailSubscriber) {
    const body = JSON.stringify(subscriberInfo);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/emailSub', body, { headers: headers })
      .map((response: HttpResponse<EmailSubscriber>) => {
        const result = response.body;
        const emailSubscriber = new EmailSubscriber(result.firstName, result.lastName, result.email);
        return emailSubscriber;
      })
      .pipe(catchError(this.handleError<any>()));
  }
}
