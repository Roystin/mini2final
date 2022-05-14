import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre!: string;
  sexo!: string;
  correo!: string;
  fecha!: string;  
  registros : usuarios[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  formularioEnviado(){
    
    this.registros = JSON.parse(localStorage.getItem("usuario") || "[{}]");
    let aux: usuarios = {
      nombre: this.nombre,
      sexo: this.sexo,
      email: this.correo,
      fecha: this.fecha
    };
    console.log(aux);
    this.registros.push(aux);
    
    localStorage.setItem('usuario', JSON.stringify(this.registros))
    alert("Enviado");
  }
  
}

interface usuarios{
  nombre:string,
  sexo:string,
  email:string,
  fecha: string
}

