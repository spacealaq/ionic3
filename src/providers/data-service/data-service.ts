import {Injectable} from '@angular/core';
//import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';

import { RequestOptions, Headers, RequestMethod } from '@angular/http';
//import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://localhost/appgricol/api/';

@Injectable()
export class DataService {

  protected headers: Headers;
  protected options: {};

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json')
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({
              "headers": this.headers,
              method: RequestMethod.Post,
            });
  }

  oauthToken(data){
  	var post ={
  		username:data.username,
  		password:data.password
  	}
  	var url = apiUrl+"auth/login";

    console.log(this.options);

    return new Promise(resolve => {
      this.http.post(url,post).subscribe(data => {
        resolve(data);
      }, err => {
        console.log('error');
        console.log(err);
      });
    });
  
  }

}
