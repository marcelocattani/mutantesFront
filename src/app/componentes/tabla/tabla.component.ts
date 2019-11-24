import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  styles: []
})
export class TablaComponent implements OnInit {

  personas:Persona[] = [];

  constructor(private servicio:PersonaService, private router:Router) {
    this.getAll();
    
   }

  ngOnInit() {
  }

  getAll(){
    this.servicio.getAll().subscribe((data) => {
      this.personas = data;
    }
   );
  }

  agregar(){
    this.router.navigate(["persona/nueva"]);
  }

  update(id:number){ 
    this.router.navigate(["persona/"+id]);
  }

  delete(id:number){
    this.servicio.delete(id).subscribe((data) => {
      alert("Eliminado")
      window.location.reload();
    },
    (data) => {
      alert("Ha Ocurrido un error, no se ha eliminado");     
    }
    );
  }

  goConsulta(){
    this.router.navigate(["persona/ismutant"]);    
  }

  goRatio(){
    this.router.navigate(["persona/ratio"]);
  }

}
