import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { } 

  getMenSlides(): Observable<any> {
    return this.http.get('assets/mocks/menSlides.json');
  }

  getWomenSlides(): Observable<any> {
    return this.http.get('assets/mocks/womenSlides.json');
  }

  getChildrenSlides(): Observable<any> {
    return this.http.get('assets/mocks/childrenSlides.json');
  }

  searchById(id: string): Observable<any> {
    const a = this.http.get('assets/mocks/menSlides.json');
    const b = this.http.get('assets/mocks/womenSlides.json');
    const c = this.http.get('assets/mocks/childrenSlides.json');

    return forkJoin([a,b,c])
    .pipe(map((arr) => Array.prototype.concat(...arr).filter((el) => el.id === id)[0]));
  }
}