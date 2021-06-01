import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product;

  constructor(private playerService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.product = new Product();
  }

  save() {
    this.playerService
      .addProduct({ id: Math.random(), ...this.product })
      .subscribe();
    this.router.navigate(['/']);
  }
}
