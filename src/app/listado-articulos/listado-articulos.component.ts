import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticulosService } from '../Servicios/articulo.service';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
