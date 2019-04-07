import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../service/areas.service';
import { Areas } from '../../models/Areas';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html'
})
export class AreasComponent {

  habilitar: boolean = true;
  areas: Areas[];

  constructor(
    private areasService: AreasService
  ) {
    this.areasService.getAreas().subscribe((areas: any) => {
      this.areas = areas.Lista_Areas
    });
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}
