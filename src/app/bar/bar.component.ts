import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  highchart = Highcharts;
  chartOptions:Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'rgb(184, 194, 252)', 
    },
    title: {
      text: 'Chart.js Bar Chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      title: {
        text: 'Total fruit consumption'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      type: 'column'
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
      type: 'column'
    }]
  };

  name:any;

  ngOnInit() {
   this.name = 'Jojhghfjhn';
   console.log(this.name);
  }
}
