import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviar()
  {
    swal("Buen Trabajo", "Se ha enviado el formulario", "success");
  }

}
