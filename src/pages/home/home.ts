import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';


@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
  	var options = {
  		chart: {
  			type: 'bar'
  		},
  		title: {
  			text: 'Fruit Consumption'
  		},
  		xAxis: {
  			categories: ['Apples', 'Bananas', 'Oranges']
  		},
  		yAxis: {
  			title: {
  				text: 'Fruit eaten'
  			}
  		},
  		series: [{
  			name: 'Jane',
  			data: [1, 0, 4]
  		}, {
  			name: 'John',
  			data: [5, 7, 3]
  		}]
  	};
    HighCharts.chart('container',options);
  }

  goDetail():void{
  	this.navCtrl.push('detail')
  }

}
