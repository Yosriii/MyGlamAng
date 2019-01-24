import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  
  private _url: string = "https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN"

  constructor(private http: HttpClient) { }

  getCardData(): Observable<any>{
    return this.http.get<any>(this._url)
  }
}
