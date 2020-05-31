import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona:Persona= new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
   let id= localStorage.getItem("id");
   this.service.getPersonasId(+id).subscribe(data=>{
     this.persona=data;
   })

  }
  Actualizar(persona:Persona){
 this.service.updatePersona(persona).subscribe(data=>{
   this.persona=data;
   alert(`El usuario ${this.persona.name} ${this.persona.apellidos} fue actualizado`);
   this.router.navigate(["listar"]);
 })
  }
}
