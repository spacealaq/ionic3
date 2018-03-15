import { Injectable,ViewChild } from '@angular/core';
import { NavController, App, Nav} from "ionic-angular/index";
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController  } from 'ionic-angular';
import { RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Storage } from '@ionic/storage';
//import { LoginPage } from '../../pages/login/login';



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
  protected persist: {};
  protected user: {};
  @ViewChild(Nav) nav: Nav;
    

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private app:App
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

    this.storage = storage;
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

  setPersist(key, value){
    if(value){
      /*console.log('setPersist');
      console.log(key);
      console.log(value);
      console.log(JSON.stringify(value));
      this.storage.set(key, JSON.stringify(value));*/
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  async callPersist(key){
    return await this.storage.get(key);
  }

  getPersist(key){
    if(key){
      return localStorage.getItem(key);
      //return this.storage.get(key);
      //return this.callPersist(key);
       /*this.callPersist('user').then(data => {
         return data;
       });*/
       //return this.persist;
      /*//this.storage.get(key).then(value => {
                  //console.log(value);
                  //val = value;
              //});

       Promise.all([
        this.storage.get('name').then((data)=>{
          this.persist=data;
        })
       ]);
        console.log(this.persist);

       console.log(val);*/
     }
      return new Promise(resolve => {});
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

         var user = this.getPersist('user');

         console.log('user');
         console.log(user);

         if(user == '' || user == undefined || user == null){
           return false;
         }
         return true;
   }
}
