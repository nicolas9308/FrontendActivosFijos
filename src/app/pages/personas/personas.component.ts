import { Component } from '@angular/core';
import { PersonasService } from '../../service/personas.service';
import { Personas } from '../../models/Personas';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
})
export class PersonasComponent {

  habilitar: boolean = true;
  personas: Personas[];

  constructor(
    private areasService: PersonasService,
    public authService: AuthService
  ) {
    this.areasService.getPersonas().subscribe((personas: any) => {
      this.personas = personas.Lista_Personas
    });
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}
