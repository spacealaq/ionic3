import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';

/**
 * Generated class for the CustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'custom',
  segment:'custom'
})
@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html',
})
export class CustomPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }

  goBack():void{
  	this.navCtrl.push('detail')
  }

}
