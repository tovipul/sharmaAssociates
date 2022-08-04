import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getPracticesAreas():Observable<any>{
   return this.http.get('./assets/js/practices.json');
  }

  getAttorneysDetails():Observable<any>{
    return this.http.get('./assets/js/attorneys-details.json');
   }
}
