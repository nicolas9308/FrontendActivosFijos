import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Areas } from '../models/Areas';

@Injectable({
  providedIn: 'root'
})
export class ActivosFijosService {
  private urlEndPoint: string = 'http://localhost:8085/api/activosFijos';

  constructor(private http: HttpClient) { }

  getActivosFijos(): Observable<Areas[]> {
    return this.http.get<Areas[]>(`${this.urlEndPoint}`);
  }
  
}
