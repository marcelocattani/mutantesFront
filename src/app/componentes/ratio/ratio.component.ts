import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Ratio } from 'src/app/model/ratio';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})
export class RatioComponent implements OnInit {

  ratio : Ratio = {
    count_mutant_dna : null,
    count_human_dna : null,
    ratio : null
  };

  constructor(private router: Router, private service: PersonaService) { 
    this.llenarTabla();
  }

  ngOnInit() {

  }

  goHome(){
    this.router.navigate([""]);
  }

  llenarTabla(){
    this.service.stats().subscribe((data) => {
      this.ratio = data;
    });
  }
}
