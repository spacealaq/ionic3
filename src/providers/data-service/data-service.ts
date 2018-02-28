import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController  } from 'ionic-angular';
import { RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://localhost/ionicserver/api/';
let loading = <any>{};

@Injectable()
export class DataService {

  protected headers: Headers;
  protected options: {};
  protected storage: Storage;

    

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    //public navCtrl: NavController,
    ) {
    console.log('Hello DataServiceProvider Provider');
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({
              "headers": this.getHeaders(),
              method: RequestMethod.Post,
            });


    
  }

   showLoading(action){
     if(action == 'show'){
       loading = this.loadingCtrl.create({
         content: 'Cargando ...'
       });
       loading.present();
     }

     if(action == 'hide'){
       loading.dismiss();
     }
   }


  setOptions(options){
    this.options = options
  }

  getOptions(){
    return  this.options
  }

  setPersist($key, $value){
    if($value){
      this.storage.set($key, JSON.stringify($value));
    }
  }

  getPersist($key){
    console.log($key);
    //console.log(this.storage.get($key));
    if($key){
         //return JSON.stringify(this.storage.get($key));  
      }
      return '';
  }

  addHeaders(key,value){
    this.headers.append(key, value);
  }

  getHeaders(){
     return this.headers;
  }

  showToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  oauthToken(send){
  	var post ={
  		username:send.username,
  		password:send.password
  	}
  	var url = apiUrl+"auth/login";



    this.showLoading('show')
    return new Promise(resolve => {
      this.http.post(url,post,this.getOptions()).subscribe(data => {
        //this.showLoading('hide'); 
        resolve(data);
      }, err => {
        this.showLoading('hide');
        this.showToast('Error en el proceso +'+err);
      });

    });
  }

  checkLogin(){
       var usuario =  this.getPersist('usuario');

       console.log(usuario);

       if(usuario == '' || usuario == undefined){
         //$rootScope.helper.hideWait();
         //$rootScope.helper.shortToast('error','Ingresa con tu usuario y contraseña'); 
         //this.navCtrl.push('login');
         return false;
       }

       return true;
     }

}
