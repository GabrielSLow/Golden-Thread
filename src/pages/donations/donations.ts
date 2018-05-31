import { Component, ViewChild } from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import { Chart } from '../../../node_modules/chart.js';


/**
 * Generated class for the DonationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {
  @ViewChild('pieChart') pieChart;
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;


  public charities: any = {
    "charities": [
      {
        'charity': 'Chai Lifeline',
        'time': 50,
        'color': 'peachpuff',
        'hover': 'rgba(199, 108, 129, 0.5)'
      },
      {
        'charity': 'United Hatzalah',
        'time': 25,
        'color': 'blue',
        'hover': 'rgba(122, 160, 202, 0.5)'
      },
      {
        'charity': 'Kol Hanearim',
        'time': 20,
        'color': 'green',
        'hover': 'rgba(200, 166, 197, 0.5)'
      },
      {
        'charity': 'Shalva',
        'time': 5,
        'color': 'purple',
        'hover': 'rgba(103, 139, 160, 0.5)'
      }
    ]
  };

  public pieChartEl: any;
  public barChartEl: any;
  public lineChartEl: any;
  public chartLabels: any = [];
  public chartValues: any = [];
  public chartColours: any = [];
  public chartHoverColours: any = [];
  public chartLoadingEl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    this.defineChartData();
    this.createPieChart();
    this.createBarChart();
    this.createLineChart();
  }




  /**
   *
   * Parse the JSON data, push specific keys into selected arrays for use with
   * each chart
   *
   */
  defineChartData(): void {
    let k: any;

    for (k in this.charities.charities) {
      var cha = this.charities.charities[k];

      this.chartLabels.push(cha.charity);
      this.chartValues.push(cha.time);
      this.chartColours.push(cha.color);
      this.chartHoverColours.push(cha.hover);
    }
  }




  /**
*
* Configure the Pie chart, define configuration options
*
*/
  createPieChart() {

    this.pieChartEl = new Chart(this.pieChart.nativeElement,
      {
        type: 'pie',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Daily Technology usage',
            data: this.chartValues,
            duration: 2000,
            easing: 'easeInQuart',
            backgroundColor: this.chartColours,
            hoverBackgroundColor: this.chartHoverColours
          }]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 0,
              bottom: 0
            }
          },
          animation: {
            duration: 5000
          }
        }
      });

    this.chartLoadingEl = this.pieChartEl.generateLegend();
  }




  /**
   *
   * Configure the Bar chart, define configuration options
   *
   */
  createBarChart(): void {
    // We'll define the pie chart related logic here shortly
  }




  /**
   *
   * Configure the Line chart, define configuration options
   *
   */
  createLineChart(): void {
    // We'll define the pie chart related logic here shortly
  }


}
