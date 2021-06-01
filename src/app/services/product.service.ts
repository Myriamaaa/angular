import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  allProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  addProduct(p: Product) {
    return this.http.post('http://localhost:3000/products', p);
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  fetchProduct(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  editProduct(id: number, p: Product) {
    return this.http.put(`http://localhost:3000/products/${id}`, p);
  }
}
