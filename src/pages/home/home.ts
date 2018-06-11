import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../registration/registration';
import { IntegtutorialPage } from '../integtutorial/integtutorial';
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, private app: App,

    public http: Http) { }



  navigateTologin() {

    this.navCtrl.setRoot(LoginPage, {
      username: this.username
    });

  }

  navigateToregister() {
    this.navCtrl.push(RegisterPage);
  }
  navigateTointegtutorial() {
    this.navCtrl.push(IntegtutorialPage);
  }


  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  login() {
    this.http
      .post("http://localhost:3000/login", {
        username: this.username,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);

          // Our username and password (on this) should have data from the user
          this.navCtrl.push(LoginPage, {
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