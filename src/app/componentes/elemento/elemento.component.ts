import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute, Router} from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {
 
    persona : Persona = {
      id: 0,
      nombre : "",
      apellido : "",
      cadena : [""],
      mutante : false ,
    }

    cadenaTemporal : string = "";

  constructor(private service: PersonaService, private actRoute : ActivatedRoute, private router:Router) { 
    this.actRoute.params.subscribe((data) => {
     if (data['id'] != "nueva") {
      this.getOne(data['id']);
     } 
    })
  }

  ngOnInit() {
  }

  save(){
    this.actRoute.params.subscribe((data) => {
      if (data['id'] == "nueva"){
        this.add();
      } else {
        this.update(data['id']);
      }
    }
    );
  }

  add(){  

    this.service.post(this.persona, this.cadenaTemporal).subscribe((data) =>{

        if (data["mutante"]) {
          alert("GUARDADO: el sujeto es mutante");
        } else {
          alert("GUARDADO: el sujeto no es mutante");
        }
           
        //Redireccionamiento a home
        this.router.navigate([""]);

      },(error) => {

        //Validar error, si es 403 la cadena no es valida
        if(error.status == 403) {
          alert("La cadena no es valida, Verifique las letras y solo use ,");
        } else {
          //Si es otro tipo de error lo notifica
          alert("Error status"+error.status)  
        }
           
      });     
    
        
  }

  update(id:number){

      this.service.put(this.persona, id , this.cadenaTemporal).subscribe((data) => {
        
        if (data["mutante"]) {
          alert("ACTUALIZADO: El sujeto es Mutante")
        } else {
          alert("ACTUALIZADO: El sujeto No es Mutante");
        }

      this.router.navigate([""]);

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

  getOne(id:number){
    this.service.getOne(id).subscribe( (data) => {
      this.persona = data;
      this.cadenaTemporal = data["cadena"].join(",");         
    });
  }

  goHome(){
    this.router.navigate([""]);
  }

}
