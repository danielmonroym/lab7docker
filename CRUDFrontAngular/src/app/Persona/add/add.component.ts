import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  persona:Persona= new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPersonas(this.persona).subscribe(data=>{

      alert(`El usuario ${this.persona.name} ${this.persona.apellidos} fue creado`);
      this.router.navigate(["listar"]);
    })
  }
}
