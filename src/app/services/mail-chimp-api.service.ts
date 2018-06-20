import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
interface MailChimpResponse {
  result: string;
  msg: string;
}
@Injectable()
export class MailChimpApiService {
  private handleError: HandleError;
  error = '';
  submitted = false;

  constructor(private http: HttpClient,
                      httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('getList');
    console.log('ApiService is Ready...');
  }

  addSubscriber() {
    const subscriberData = new FormData()
    subscriberData.append('name', 'slib');
    subscriberData.append('email', 'slib@jones');

    return this.http.post<any>('http://localhost:3000/', { email: 'malcolm@gmail', name: 'poop' });
  }

  addMember() {
    // this.http.post('','')
  }
}
