import { Injectable } from '@angular/core';
import { Areas } from '../models/Areas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private urlEndPoint: string = 'http://localhost:8085/api/personas';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Areas[]> {
    return this.http.get<Areas[]>(`${this.urlEndPoint}`);
  }

}
