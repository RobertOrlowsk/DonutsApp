import {Component, OnInit} from "@angular/core";
import {AddProductService} from "../../services/add-product.service";
import {shopModel} from "../../models/shop-model";
import { StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'shop-page',
  templateUrl: 'shop-page.component.html',
  styleUrls: ['shop-page.component.scss']
})

export class ShopPageComponent implements  OnInit{

  Donuts: shopModel[] = []
  constructor(
    private donutsService: AddProductService
  ) {}

  ngOnInit() {
     this.Donuts = this.donutsService.getAll();
  }

}
