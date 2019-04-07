import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LoginComponent } from './pages/usuarios/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AreasComponent } from './pages/areas/areas.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { ActivosComponent } from './pages/activos/activos.component';
import { DetalleActivoComponent } from './pages/activos/detalle-activo/detalle-activo.component';
import { ActivosFijosService } from './service/activos-fijos.service';
import { AreasService } from './service/areas.service';
import { PersonasService } from './service/personas.service';
import { AuthService } from './service/auth.service';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'areas', component: AreasComponent },
  { path: 'personas', component: PersonasComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_USER' } },
  { path: 'activosFijos', component: ActivosComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'activosFijos/form', component: DetalleActivoComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },  
  { path: 'activosFijos/form/:id', component: DetalleActivoComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AreasComponent,
    PersonasComponent,
    ActivosComponent,
    DetalleActivoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatMomentDateModule,
    ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule
  ],
  providers: [
    ActivosFijosService,
    AreasService,
    PersonasService,
    AuthService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
