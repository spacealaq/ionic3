import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from  '../home/home';
import { DataService } from '../../providers/data-service/data-service';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name:"detail",
	segment:'detail'
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: DataService
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  goBack():void{
  	this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  goNext():void{
    this.navCtrl.push('custom');
  }

 

}
