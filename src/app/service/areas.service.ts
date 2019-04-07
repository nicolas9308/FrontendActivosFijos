import { Injectable } from '@angular/core';
import { Areas } from '../models/Areas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private urlEndPoint: string = 'http://localhost:8085/api/areas';

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Areas[]> {
    return this.http.get<Areas[]>(`${this.urlEndPoint}`);
  }

}
