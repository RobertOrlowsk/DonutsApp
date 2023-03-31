import { Injectable} from "@angular/core";
import {shopModel} from "../models/shop-model";

@Injectable()
export class AddProductService {

  constructor() {}
  getAll():shopModel[]{
    return [
      {
        id:1,
        name: 'Do nut',
        price: 10,
        tags: ['test','test1'],
        favorite: true,
        starts: 4,
        imageUrl: 'assets/DonutsForSale/Don1.jpeg',
      },
      {
        id:2,
        name: 'Kapitan Donut',
        price: 20,
        tags: ['test','test1'],
        favorite: true,
        starts: 5,
        imageUrl: 'assets/DonutsForSale/Don2.jpeg',
      },
      {
        id:3,
        name: 'Vito Donutone',
        price: 5,
        tags: ['test','test1'],
        favorite: true,
        starts: 4,
        imageUrl: 'assets/DonutsForSale/Don3.jpeg',
      },
      {
        id:4,
        name: 'Mrs Donut',
        price: 30,
        tags: ['test','test1'],
        favorite: true,
        starts: 5,
        imageUrl: 'assets/DonutsForSale/Don4.jpeg',
      },
      {
        id:5,
        name: 'Mc Donut',
        price: 25,
        tags: ['test','test1'],
        favorite: true,
        starts: 5,
        imageUrl: 'assets/DonutsForSale/Don5.jpeg',
      }
    ]
  }
}
