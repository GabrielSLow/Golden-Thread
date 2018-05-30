import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitydetailsPage } from '../charitydetails/charitydetails'

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {
items = [
{name: "Chai Lifeline", slogan: "Fighting Illness with Love", description: "Chai Lifeline has grown from a small, community-based summer camp program for children with cancer to one of the preeminent international health support networks supporting seriously ill children, their families, and communities."},
{name: "United Hatzalah", slogan: "When Seconds Count...", description: "United Hatzalah is a free, volunteer-based emergency medical services (EMS) organization based in Jerusalem."},
{name: "Kol Hanearim", slogan: "It's easier to believe in yourself when others believe in you.", description: "Kol HaNearim (KH) strives to care for some of the most vulnerable members of the global community: orphans and children at risk."}
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.initializeItems();
 
  }

  
  initializeItems() {
this.items= [


];


  }


  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

  navigateTocharitydetails() {
    this.navCtrl.push(CharitydetailsPage,{
      name: this.name, slogan: this.slogan, description: this.description}
    );
  }
}
