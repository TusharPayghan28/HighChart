import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { FormComponent } from './form/form.component';
import { NewchartComponent } from './newchart/newchart.component';

const routes: Routes = [
  // {path:'' , component:FormComponent},
  { path:'bar' , component:BarComponent},
  { path:'chart' , component:NewchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
