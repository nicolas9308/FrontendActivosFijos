import { Component, OnInit } from '@angular/core';
import { ActivosFijosService } from '../../service/activos-fijos.service';
import { ActivosFijos } from '../../models/ActivosFijos';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html'
})
export class ActivosComponent {

  habilitar: boolean = true;
  activosFijos: ActivosFijos[];

  constructor(
    private areasService: ActivosFijosService
  ) {
    this.areasService.getActivosFijos().subscribe((activosFijos: any) => {
      this.activosFijos = activosFijos.Lista_Activos;
      console.log("Esto es lo que llega", this.activosFijos);
    });
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }
}
