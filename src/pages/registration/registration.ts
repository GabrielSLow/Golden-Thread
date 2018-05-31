import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { PaymentPage } from '../payment/payment'



@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegisterPage {

  desiredamountpledged: string;
  username: string;

  constructor(public navCtrl: NavController) {
  }
  navigateTologin() {
    this.navCtrl.push(LoginPage, {desiredamountpledged: this.desiredamountpledged, username: this.username
    });
  }

  navigateTopayment() {
    this.navCtrl.push(PaymentPage, {
      desiredamountpledged: this.desiredamountpledged
    });
  }
}
