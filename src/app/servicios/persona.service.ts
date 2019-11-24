import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
import { Consulta } from '../model/consulta';
import { Ratio } from '../model/ratio';
@Injectable({
  providedIn: 'root'
})

export class PersonaService {

_url:string = 'http://localhost:8080/api/v1/mutantes/';

  constructor(private http:HttpClient) { }

getAll() : Observable<Persona[]>{  
  return this.http.get<Persona[]>(this._url);
}

getOne(id:number) : Observable<Persona>{
  return this.http.get<Persona>(this._url+id);
}

post (persona:Persona, cadenaTemporal:string) : Observable<Persona>{

  //Traduce la cadena temporal a un array para poder ser almacenado
  persona["cadena"] = cadenaTemporal.toUpperCase().split(",");
  return this.http.post<Persona>(this._url,persona);
}

put (persona:Persona, id:number, cadenaTemporal : string) : Observable<Persona>{

  //Traduce la cadena temporal a un array para poder ser almacenado
  persona["cadena"] = cadenaTemporal.toUpperCase().split(",");
  return this.http.put<Persona>(this._url+id, persona);
}

delete (id:number) : Observable<any> {
  return this.http.delete<any>(this._url+id);
}

isMutant(persona:Consulta, cadenaTemporal : string) : Observable<Consulta> {

  //Traduce la cadena temporal a un array para poder ser almacenado
  persona["cadena"] = cadenaTemporal.toUpperCase().split(",");

  return this.http.post<Consulta>(this._url+'/mutant/',persona);
}

stats () : Observable<Ratio>{
  return this.http.get<Ratio>(this._url+'/stats');
}

}

