const BASE_URL = 'http://localhost:3000/';

export interface Menubar {
  id: number;
  name: string;
  submenu?: Array<Menubar>;
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient: HttpClient) {}
  getMenus(): Observable<any> {
    return this.httpClient.get(BASE_URL + 'menubar');
  }
}
