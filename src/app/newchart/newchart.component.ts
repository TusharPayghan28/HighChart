import { Component, Inject, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';

export interface DialogData {
  newchart:any;
}

@Component({
  selector: 'app-newchart',
  templateUrl: './newchart.component.html',
  styleUrls: ['./newchart.component.css']
})
export class NewchartComponent{

  highcharts=highcharts;

  chartOptions:highcharts.Options={
    chart:{
      type:'area'
    },
    title:{
      text:'New Chart'
    },
    xAxis:{
      categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']  
    },
    yAxis:{
      title:{
        text:'Sales'
      }
    },
    series:[{
        name:'New',
        data:[29.9,71.5,106.4,129.2,144.0,176.0,135.6,148.5,216.4,194.1,95.6,54.4],
        type:'area'
      }]
  }
  

}
