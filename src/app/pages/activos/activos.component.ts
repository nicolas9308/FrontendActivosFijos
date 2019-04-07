import { Component, OnInit } from '@angular/core';
import { ActivosFijosService } from '../../service/activos-fijos.service';
import { ActivosFijos } from '../../models/ActivosFijos';
import swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html'
})
export class ActivosComponent {

  habilitar: boolean = true;
  activosFijos: ActivosFijos[];

  constructor(
    private activosFijosService: ActivosFijosService,
    public authService: AuthService
  ) {
    this.activosFijosService.getActivosFijos().subscribe((activosFijos: any) => {
      this.activosFijos = activosFijos.Lista_Activos;
      console.log("Estos son los activos", this.activosFijos)
    });
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

  delete(activoFijo: ActivosFijos): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el activo ${activoFijo.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.activosFijosService.delete(activoFijo.id).subscribe(
          () => {
            this.activosFijos = this.activosFijos.filter(act => act !== activoFijo)
            swal(
              'Activo Eliminado!',
              `Activo ${activoFijo.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }


}
