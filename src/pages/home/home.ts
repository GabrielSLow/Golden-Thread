import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../registration/registration';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
navigateTologin () {
this.navCtrl.push(LoginPage);
}

navigateToregister () {
this.navCtrl.push(RegisterPage);
}


}