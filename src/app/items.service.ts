import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  public fetchItems() {
    return this.http.get('https://a52366b4-ebe0-4594-b476-c138f904280d.mock.pstmn.io/get/');
  }
}
