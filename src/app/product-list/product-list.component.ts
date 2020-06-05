import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      'productId': 2,
      'productName': 'Golf Shoe',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Leather golf shoe',
      'price': 6999.99,
      'starRating': 4.3,
      'imageUrl': 'assets/golf shoes.jpg',
      'productCode': 'GS-001'
    },

    {
      'productId': 5,
      'productName': 'Hiking Boot',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Leather hiking shoe',
      'price': 4999.99,
      'starRating': 4.8,
      'imageUrl': 'assets/hiking boots.jpg',
      'productCode': 'GS-002'
    },

    {
      'productId': 8,
      'productName': 'Sneakers',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Leather sneakers',
      'price': 7999.99,
      'starRating': 4.1,
      'imageUrl': 'assets/sneakers.jpg',
      'productCode': 'GS-003'
    },

    {
      'productId': 11,
      'productName': 'Lita',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Lita shoe',
      'price': 2999.99,
      'starRating': 4.9,
      'imageUrl': 'assets/lita.jpg',
      'productCode': 'GS-004'
    },

    {
      'productId': 14,
      'productName': 'Business shoe',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Leather Business shoe',
      'price': 12999.99,
      'starRating': 4.4,
      'imageUrl': 'assets/business shoe.jpg',
      'productCode': 'GS-005'
    },

    {
      'productId': 17,
      'productName': 'Boot',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Cassic Boot',
      'price': 10999.99,
      'starRating': 3.9,
      'imageUrl': 'assets/boots.jpg',
      'productCode': 'GS-006'
    },

    {
      'productId': 20,
      'productName': 'Cowboy boots',
      'releaseDate': 'June 04, 2020',
      'description': 'Original Leather Cowboy boots',
      'price': 3999.99,
      'starRating': 4.0,
      'imageUrl': 'assets/cowboy boot.jpg',
      'productCode': 'GS-007'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
