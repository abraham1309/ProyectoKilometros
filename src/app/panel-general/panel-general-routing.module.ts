import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelGeneralComponent } from './panel-general.component';
import { PanelGeneralModule } from './panel-general.module';

const routes: Routes = [
  {
    path:'', 
    component: PanelGeneralComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelGeneralRoutingModule { }
