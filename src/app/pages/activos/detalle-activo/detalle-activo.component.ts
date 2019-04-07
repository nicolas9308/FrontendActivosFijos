import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivosFijos } from '../../../models/ActivosFijos';
import { ActivosFijosService } from '../../../service/activos-fijos.service';


@Component({
  selector: 'app-detalle-activo',
  templateUrl: './detalle-activo.component.html'
})
export class DetalleActivoComponent implements OnInit {

  titulo: string = "Tipo de Activo Fijo";
  errores: string[];
  activoFijo: ActivosFijos = new ActivosFijos();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private activoFijoService: ActivosFijosService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.activoFijoService.getActivoFijo(id).subscribe((activo: any) => {this.activoFijo = activo.Lista_Activos;
        console.log("este es el activo", this.activoFijo)});
      }
    });
  }

  
  update(): void {
    console.log(this.activoFijo);
    this.activoFijoService.update(this.activoFijo)
      .subscribe(
        json => {
          this.router.navigate(['/activosFijos']);
          console.log("esta es la respuesta",json);
          swal('Activo Actualizado', `${json.Mensaje}: ${json.Tipo_Activo_Fijo.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }

  create(): void {
    console.log(this.activoFijo);
    this.activoFijoService.create(this.activoFijo)
      .subscribe(
        (activo: any) => {
          this.router.navigate(['/activosFijos']);
          console.log("El activo", activo);
          swal('Nuevo Activo', `El activo ${activo.nombre} ha sido creado con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }
}
