import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowsePage} from '../browse/browse'

/**
 * Generated class for the Charitydetails page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charitydetails',
  templateUrl: 'charitydetails.html',
})
export class CharitydetailsPage {

  name: string;
  slogan: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.slogan = navParams.get("slogan");
    this.description = navParams.get("description");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitydetailsPage');
  }

}
