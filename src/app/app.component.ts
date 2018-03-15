import { Component, ViewChild  } from '@angular/core';
import { Platform,Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataService } from '../providers/data-service/data-service';

import { LoginPage } from '../pages/login/login';
import { DetailPage } from '../pages/detail/detail';

//import { TutorialPage } from '../pages/tutorial/tutorial';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  app: any;
  ds: any;
  //rootPage:any = LoginPage;
   @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app:App, ds:DataService) {
    this.ds = ds;
    this.app = app;

    if(this.ds.checkLogin() == true){
      this.rootPage = DetailPage;
      console.log('detail');
    }else{
      this.rootPage = LoginPage;
      console.log('login');
    }


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

     

    });
  }

  ngOnInit() {
      // Let's navigate from TabsPage to Page1
      //console.log('on init');
       //this.rootPage = LoginPage;
      //this.nav.setRoot(LoginPage);
      //this.nav.setRoot(LoginPage);
      //this.nav.popToRoot()
      //this.nav.push('login');
      this.nav.setRoot(DetailPage);
   }

   openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.setRoot(DetailPage);
        this.nav.popToRoot();
    }

    ngAfterViewInit(){
      setTimeout(() => {
        console.log('ngAfterViewInit');
          if(this.ds.checkLogin() == false){
            this.nav.push(LoginPage);
          }
      }, 500);
      /*console.log(this.ds);
      if(this.ds.checkLogin() == false){
        setTimeout(() => {
          this.nav.push(DetailPage);
        }, 1000);  
      }*/
      
    }

    ionViewDidLoad(){
      console.log('ionViewDidLoad');
      /*console.log(this.ds);
      if(this.ds.checkLogin() == false){
        setTimeout(() => {
          this.nav.push(DetailPage);
        }, 1000);  
      }*/
      
    }
}

