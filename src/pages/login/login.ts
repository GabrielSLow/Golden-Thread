import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
import { BrowsePage} from '../browse/browse';
import { DonationsPage} from '../donations/donations';
import { PaymentPage } from '../payment/payment'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;
  public desiredamountpledged: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("username");
    this.desiredamountpledged = navParams.get("desiredamountpledged");
  }

  navigateTohome () {
    this.navCtrl.push(HomePage);
  }

  navigateTobrowse () {
    this.navCtrl.push(BrowsePage);
  }

  navigateTodonations () {
    this.navCtrl.push(DonationsPage);
  }

  navigateTopayment () {
    this.navCtrl.push(PaymentPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  home() {
    // Our username (on this) should have data from the user
    this.navCtrl.push(LoginPage, {
      username: this.username,
      desiredamountpledged: this.desiredamountpledged
    });
  }
}

