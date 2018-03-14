import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App  } from 'ionic-angular';
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

  public data = <any>{};
  
  public user = {
  	username:'aleoas@gmail.com',
    password:'aa012390',
    redirect: ''
  };

  constructor( 
    public ds: DataService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App) {
  }

  login(){
  	this.ds.oauthToken(this.user)
    .then(data => {
      this.ds.showLoading('hide');
      this.data = data;
      if(this.data.status == 'ok'){
        this.ds.showToast(this.data.msg);
        this.navCtrl.push('detail')
      }else{
        this.ds.showToast(this.data.msg);
      }
    });
  	
  }

}
