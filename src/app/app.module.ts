import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementoComponent } from './componentes/elemento/elemento.component';
import {FormsModule} from '@angular/forms';
import { ConsultaRapidaComponent } from './componentes/consulta-rapida/consulta-rapida.component';
import { RatioComponent } from './componentes/ratio/ratio.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    ElementoComponent,
    ConsultaRapidaComponent,
    RatioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
