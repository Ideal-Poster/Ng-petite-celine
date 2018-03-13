import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MailChimpApiService {
  private handleError: HandleError;

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) {
                this.handleError = httpErrorHandler.createHandleError('getList')
                console.log('ApiService is Ready...')
              }

  getList() {
    return this.http.get('https://us17.api.mailchimp.com/3.0/lists/c760b1311e/members')
    .pipe(
      catchError(this.handleError('getList', []))
    );
  }
}
