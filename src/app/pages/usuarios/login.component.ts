import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo: string = 'Por favor Inicia Sesion!';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      swal('Inicio Sesion', `Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/areas']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal('Error de inicio de sesion', 'Username o password vacías!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/activosFijos']);
      swal('Inicio Sesion', `Hola ${usuario.usuario}, has iniciado sesión con éxito!`, 'success');
    }, err => {
      if (err.status == 400) {
        swal('Error de inicio de sesion', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

}
