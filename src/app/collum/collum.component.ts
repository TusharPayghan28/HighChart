import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-collum',
  templateUrl: './collum.component.html',
  styleUrls: ['./collum.component.css']
})
export class CollumComponent {

  highcharts = Highcharts;

  chartOptions:Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'rgb(247, 245, 223)', 
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
      data: [
        {name: 'direct', y: 10},
        {name: 'direct', y: 10},
        {name: 'direct', y: 10},
        {name: 'direct', y: 10},
        {name: 'direct', y: 10},
        {name: 'direct', y: 10},
        
      ],
      type: 'pie'
    }]
  };
}
