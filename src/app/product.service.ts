import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Album } from './album';
import { Product } from './product';
import { Observer } from 'rxjs/Observer';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _productsUrl = '../assets/products.json';
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(
        (response) => <Album>response.json()
      );
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl)
    .map(
      (response) => <Product[]>response.json()
    );
  }
}
