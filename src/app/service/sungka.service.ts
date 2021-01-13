import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Sungka} from '../sungka-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SungkaService {

  constructor(private http: HttpClient) { }

  private api_url = 'https://5ffdbb67d9ddad0017f68771.mockapi.io/api/v1/sungka';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  initGame(): Observable<Sungka> {
    return this.http.get<Sungka>(this.api_url);
  }

  updateGame(sungka: Sungka) :  Observable<Sungka> {
    return this.http.post<Sungka>(this.api_url, sungka, this.httpOptions);
  }

}
