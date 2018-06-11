import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PaymentPage } from '../payment/payment';
import { Http } from "@angular/http";



@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegisterPage {

  desiredamountpledged: string;
  public email: string;
  public phonenumber: string;
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {
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
  login() {
    this.http
      .post("http://localhost:3000/login", {
        email: this.email,
        phonenumber: this.phonenumber,
        username: this.username,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);

          // Our username and password (on this) should have data from the user
          this.navCtrl.push(LoginPage, {
            email: this.email,
            phonenumber: this.phonenumber,
            username: this.username,
            password: this.password
          });
        },

        error => {
          console.log(error);
        }
      );
  }
}
