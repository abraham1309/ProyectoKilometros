import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PanelGeneralComponent } from './panel-general/panel-general.component';

const routes: Routes = [
  {path: '', component: FormularioComponent},
  {path:'Panel', loadChildren:'./panel-general/panel-general.module#PanelGeneralModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
