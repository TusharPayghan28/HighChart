import { Component } from '@angular/core';
import * as highcharts from 'highcharts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {

  highcharts = highcharts;

  chartOptions:highcharts.Options={
    chart:{
      type:'column'
    },
    title:{
      text:'New Chart'
    },
    xAxis:{
      categories:['Jan','Feb','Mar','Apr','May','Jun']  
    },
    yAxis:{
      title:{
        text:'Sales'
      }
    },
    series:[{
        name:'New',
        data:[2,9,3,5,3,2],
        type:'column'
      }]
  }
}
