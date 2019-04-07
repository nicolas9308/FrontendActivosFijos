import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string = 'Grupo ASD'

  constructor(public authService: AuthService, private router: Router) { }
  logout(): void {
    let username = this.authService.usuario.usuario;
    this.authService.logout();
    swal('Cerrar Sesion', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }
}
