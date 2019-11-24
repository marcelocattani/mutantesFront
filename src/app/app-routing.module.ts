import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { ElementoComponent } from './componentes/elemento/elemento.component';
import { ConsultaRapidaComponent } from './componentes/consulta-rapida/consulta-rapida.component';
import { RatioComponent } from './componentes/ratio/ratio.component';


const routes: Routes = [
  {path: '', component : TablaComponent},
  {path: 'persona/ismutant', component : ConsultaRapidaComponent} ,
  {path: 'persona/ratio', component : RatioComponent},
  {path: 'persona/:id', component : ElementoComponent},  
  {path: 'persona/nuevo', component : ElementoComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
