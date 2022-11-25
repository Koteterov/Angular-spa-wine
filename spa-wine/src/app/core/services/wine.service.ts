import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWine } from 'src/app/core/interfaces/wine';
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

  edit$(wineId: string, data: IWine): Observable<IWine> {
    return this.http.put<IWine>(
      `${environment.URL}/data/catalog/${wineId}`,
      data,
      {
        withCredentials: true,
      }
    );
  }

  getMy$(userId: string | undefined): Observable<IWine[]> {
    return this.http.get<IWine[]>(
      `${environment.URL}/data/catalog/my?userId=${userId}`
    );
  }
  getMyLikes$(userId: string | undefined): Observable<IWine[]> {
    return this.http.get<IWine[]>(
      `${environment.URL}/data/catalog/my/likes?userId=${userId}`
    );
  }

  findWines$(search: string = ''): Observable<IWine[]> {
    return this.http.get<IWine[]>(
      `${environment.URL}/data/catalog?name=${search}`
    );
  }

  deleteOne$(wineId: string): Observable<IWine> {
    return this.http.delete<IWine>(
      `${environment.URL}/data/catalog/${wineId}`,
      {
        withCredentials: true,
      }
    );
  }
  likeWine$(wineId: string): Observable<IWine> {
    return this.http.get<IWine>(
      `${environment.URL}/data/catalog/like/${wineId}`,
      {
        withCredentials: true,
      }
    );
  }
  unlikeWine$(wineId: string): Observable<IWine> {
    return this.http.get<IWine>(
      `${environment.URL}/data/catalog/unlike/${wineId}`,
      {
        withCredentials: true,
      }
    );
  }

  //
  // loadThemeList(searchTerm: string = ''): Observable<ITheme[]> {
  //   return this.http.get<ITheme[]>(`${apiUrl}/themes?title=${searchTerm}`, {
  //     params: new HttpParams({
  //       fromObject: {
  //       }
  //     })
  //   });
  // }
}
