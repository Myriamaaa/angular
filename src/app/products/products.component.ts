import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList: Product[];
  search: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.allProducts().subscribe((data: Product[]) => {
      this.productsList = data;
    });
  }

  deleteP(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productsList = this.productsList.filter((p) => p.id !== id);
    });
  }

  searchProduct() {
    if (this.search === '') {
      this.productService.allProducts().subscribe((data: Product[]) => {
        this.productsList = data;
      });
      return;
    }
    this.productsList = this.productsList.filter((p) =>
      p.name.toLowerCase().includes(this.search.toLocaleLowerCase())
    );
  }
}
