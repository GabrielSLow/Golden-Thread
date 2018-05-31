import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { DonationsPage } from '../donations/donations'

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  
  public desiredamountpledged: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.desiredamountpledged = navParams.get("desiredamountpledged");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  navigateTodonations () {
    this.navCtrl.push(DonationsPage);
  }

  registration() {
    // Our username (on this) should have data from the user
    this.navCtrl.push(LoginPage, {
      desiredamountpledged: this.desiredamountpledged
    });
  }
}
