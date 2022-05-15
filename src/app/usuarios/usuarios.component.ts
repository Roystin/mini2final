import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  base : string[] = [];
  registros : usuarios[] = [];
  friend : string[] = [];
  constructor() { 

  this.registros = JSON.parse(localStorage.getItem("usuario") || "[{}]");
  
  
  }

  ngOnInit(): void {
  }
}

interface usuarios{
  nombre:string,
  sexo:string,
  email:string,
  fecha: string
}
