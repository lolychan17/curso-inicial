import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado, IEmpleado } from 'src/app/interface/empleadosinterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit{
  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;
  listMenu: MenuItem [] = [];
  activeItem!: MenuItem;
  constructor(private ruta: Router,
              private empleadoService: EmpleadoService){

  }

  ngOnInit(): void {
    this.inicolumnaTabla();
    this.inicioMenu();
    console.log ('Hola estoy desde OnInit')
    // this.empleadoService.getAllemployee().subscribe(
    //   (datos) => {
    //     console.log(datos);
    //     this.listEmpleado = datos.data;
    //   },
    //   (error) =>{
    //     console.log(error);
    //   }
    // );
    this.empleadoService.getAllemployee().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listEmpleado = datos.results;

        }, 
        error: (err) => {
          console.log(err);
        }
      }
    );

  }

regresarInicio(){
  this.ruta.navigate(['inicio']);
}

inicolumnaTabla(){
  this.columnTabla = [
    {
      field: 'name', header: 'Nombre del Pokemon'
    },
{
  field: 'url', header: 'Url de Imagen'
},

  ];
}

inicioMenu() {
  this.listMenu = [
    {
      label: 'Inicio'
    },
    {
      label: 'Tabla'
    }
  ];
  this.activeItem = this.listMenu[0];
}

}
