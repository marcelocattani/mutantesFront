import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Consulta } from 'src/app/model/consulta';



@Component({
  selector: 'app-consulta-rapida',
  templateUrl: './consulta-rapida.component.html',
  styleUrls: ['./consulta-rapida.component.css']
})
export class ConsultaRapidaComponent implements OnInit {

  persona : Consulta = {
    cadena : [""],
    mutante : false ,
  }

  cadenaTemporal = "";

  constructor(private router : Router, private service : PersonaService) {
    
   }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate([""]);
  }

  consultar(){
    this.service.isMutant(this.persona, this.cadenaTemporal).subscribe((data) => {

      if (data["mutante"]) {
        alert("VERIFICADO: El sujeto es Mutante")
      } else {
        alert("VERIFICADO: El sujeto es Humano");
      }   

    }, (error) => {

      //Validar error, si es 403 la cadena no es valida
      if(error.status == 403) {
        alert("La cadena no es valida, Verifique las letras y solo use ,");
      } else {
        //Si es otro tipo de error lo notifica
        alert("Error status"+error.status)  
      }

    });
  }

}
