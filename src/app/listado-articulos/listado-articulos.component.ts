import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticulosService } from '../Servicios/articulo.service';
import { MatTableDataSource } from '@angular/material/table/table-data-source';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit {

  displayedColumns: string[] = ['familia', 'nombre', 'precio'];
  
  dataSource = new MatTableDataSource<Articulo>();

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos() {

    this.articulosService.getArticulos().subscribe(data => {
      this.dataSource.data = data.map(e => {
        return {
          familia: e.doc.data()['familia'],
          nombre: e.doc.data()['nombre'],
          precio: e.doc.data()['precio'],
        } as Articulo;
      })
    });
  }

}