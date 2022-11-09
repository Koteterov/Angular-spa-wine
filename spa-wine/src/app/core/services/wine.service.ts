import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWine } from 'src/app/shared/interfaces/wine';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  create$(data: {
    name: string, 
    type: string, 
    origin: string, 
    price: string, 
    image: string, 
    description: string

  }): Observable<IWine> {
    return this.http.post<IWine>(`${environment.URL}/data/catalog`, data, { withCredentials: true})
  }


}
