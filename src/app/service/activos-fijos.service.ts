import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ActivosFijos } from '../models/ActivosFijos';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ActivosFijosService {
  private urlEndPoint: string = 'http://localhost:8085/api/activosFijos';

  constructor(private http: HttpClient) { }

  getActivosFijos(): Observable<ActivosFijos[]> {
    return this.http.get<ActivosFijos[]>(`${this.urlEndPoint}`);
  }

  getActivoFijo(id: number): Observable<ActivosFijos> {
    return this.http.get<ActivosFijos>(`${this.urlEndPoint}/${id}`);
  }

  delete(id: number): Observable<ActivosFijos> {
    return this.http.delete<ActivosFijos>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

  update(activoFijo: ActivosFijos): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${activoFijo.id}`, activoFijo).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

  create(activo: ActivosFijos): Observable<ActivosFijos> {
    return this.http.post(this.urlEndPoint, activo)
      .pipe(
        map((response: any) => response.Tipo_Activo_Fijo as ActivosFijos),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
  }

}
