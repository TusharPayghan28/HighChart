import { Component } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewchartComponent } from '../newchart/newchart.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(public dialog: MatDialog,private router:Router) { }

  chart =new FormGroup({
    ctype: new FormControl(''),
    bgcolor: new FormControl(''),
    title: new FormControl(''),
    xAxis: new FormControl(),
    yAxis: new FormControl(),
    ytitle: new FormControl(''),
    sname: new FormControl(''),
    stype: new FormControl(''),
    sdata: new FormControl(),
   
  })



  openChart(){
  //  this.router.navigate(['/chart',{chart:this.chart.value}]);
  this.dialog.open(NewchartComponent, {
    data: {
      newchart: this.chart.value,
    },
  });
  }
  
}
