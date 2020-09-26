import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PanelGeneralComponent } from './panel-general/panel-general.component';
import { PanelGeneralModule } from './panel-general/panel-general.module';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PanelGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelGeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
