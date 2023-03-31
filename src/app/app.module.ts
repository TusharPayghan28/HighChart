import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { LinesComponent } from './lines/lines.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import {MatCardModule} from '@angular/material/card';
import { CollumComponent } from './collum/collum.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { NewchartComponent } from './newchart/newchart.component';
import { RadarComponent } from './radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    BarComponent,
    PieComponent,
    CollumComponent,
    FormComponent,
    NewchartComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
