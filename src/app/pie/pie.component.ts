import { Component } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  highcharts = highcharts;

  chartOptions:Highcharts.Options = {
    chart: {
      type: 'scatter',
      backgroundColor: 'rgb(225, 177, 249)', 
    },
    title: {
      text: 'Chart.js Line Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Number of Tickets'
      }
    },
    series: [{
      name: 'Tickets',
      data: [10, 18, 27, 33,44, 54, 60, 67,74, 82, 90, 96],
      type: 'scatter'
    }]
  };

}
