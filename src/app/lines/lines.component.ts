import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent {

  highcharts = Highcharts;
  
  chartOptions : Highcharts.Options= {
    chart: {
      type: 'line',
      backgroundColor: 'rgb(247, 223, 237)', 
    },
    title: {
      text: 'Line chart'
    },
    xAxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    },
    yAxis: {
      categories: ['20', '40', '60', '80', '100',  '120', '140', '160',  '180',  '200'],
      title: {
        text: 'Sample values'
      },

    },
    series: [{
      name: 'India',
      data: [10, 18, 27, 33,44, 54, 60, 67,74, 82, 90, 96,107,116,125, 140, 149, 158,171, 184],
      type: 'line'
    },
    {
      name: ' Pakistan',
      data: [11, 16, 26, 33,46, 56, 70, 73,76, 85, 90, 98,109,114,126, 138, 146, 158,172, 181], 
      type: 'line'
    },
  ],
   
  }


}
