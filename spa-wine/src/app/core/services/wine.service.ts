import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWine } from 'src/app/shared/interfaces/wine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private http: HttpClient) {}

  create$(data: IWine): Observable<IWine> {
    return this.http.post<IWine>(`${environment.URL}/data/catalog`, data, {
      withCredentials: true,
    });
  }

  getAll$(): Observable<IWine[]> {
    return this.http.get<IWine[]>(`${environment.URL}/data/catalog`);
  }

  getOne$(wineId: string): Observable<IWine> {
    return this.http.get<IWine>(`${environment.URL}/data/catalog/${wineId}`);
  }

  edit$(wineId:string, data: IWine): Observable<IWine> {
    return this.http.put<IWine>(`${environment.URL}/data/catalog/${wineId}`, data, {
      withCredentials: true,
    });
  }
}
