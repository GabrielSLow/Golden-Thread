import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DonationsPage } from '../donations/donations';
import { PaymentPage } from '../payment/payment'
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;
  public password: string;
  public desiredamountpledged: string;

  cards: any;
    category: string = 'gear';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.username = navParams.get("username");
    this.desiredamountpledged = navParams.get("desiredamountpledged");
    this.cards = new Array(10);
  }

  navigateTohome () {
    this.navCtrl.push(HomePage);
  }

  // navigateTobrowse () {
  //   this.navCtrl.push(BrowsePage);
  // }

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

