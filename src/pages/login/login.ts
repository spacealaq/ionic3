import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name:"login",
	segment:'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
  	username:'test'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataService) {
  }

  login(){
  	this.ds.oauthToken(this.user)
    .then(data => {
      console.log('then');
      console.log(data);
    });
  	
  }

}
