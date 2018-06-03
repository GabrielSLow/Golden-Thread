import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../registration/registration';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;


  constructor(public navCtrl: NavController, private app: App) {



  }



  navigateTologin() {

    this.navCtrl.setRoot(LoginPage, {
      username: this.username
    });

  }

  navigateToregister() {
    this.navCtrl.push(RegisterPage);
  }

  logout () {
    this.app.getRootNav().setRoot(LoginPage);
  }

}