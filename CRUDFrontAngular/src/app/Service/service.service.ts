import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(private http:HttpClient) { }

  Url='http://localhost:8089/Lab7Back/personas';

 getPersonas(){
   return this.http.get<Persona[]>(this.Url);
 }
 createPersonas(persona:Persona){
  return this.http.post<Persona>(this.Url,persona);
 }
 getPersonasId(id:number){
  return this.http.get<Persona>(this.Url+"/"+id);
}
updatePersona(persona:Persona){
  return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
}
deletePersona(persona:Persona){
  return this.http.delete<Persona>(this.Url+"/"+persona.id);
}
}
