import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home'
import { BrowsePage} from '../browse/browse'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("username");
  }

  navigateTohome () {
    this.navCtrl.push(HomePage);
  }

  navigateTobrowse () {
    this.navCtrl.push(BrowsePage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  home() {
    // Our username (on this) should have data from the user
    this.navCtrl.push(LoginPage, {
      username: this.username
    });
  }
}

