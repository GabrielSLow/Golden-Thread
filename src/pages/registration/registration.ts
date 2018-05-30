import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage} from '../home/home'


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegisterPage {


  constructor(public navCtrl: NavController) {
  }
  navigateTohome () {
    this.navCtrl.push(HomePage);
  }
  }
