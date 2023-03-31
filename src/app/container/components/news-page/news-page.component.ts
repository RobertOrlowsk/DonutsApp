import {AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {SwiperOptions} from "swiper";
import {SwiperComponent} from "swiper/angular";

import { shopModel} from "../../models/shop-model";
import { AddProductService} from "../../services/add-product.service";

@Component({
  selector: 'news-page',
  templateUrl: 'news-page.component.html',
  styleUrls: ['news-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NewsPageComponent implements AfterContentChecked, OnInit{

  @ViewChild('swiper') swiper: SwiperComponent
  img =  [
    'assets/Swiper/Swiper1.png',
    'assets/Swiper/Swiper2_Vito_Donutone.png',
    'assets/Swiper/Swiper3_DoNut.png',
    'assets/Swiper/Swiper2_Mrs_Donut.png',
  ]

  config: SwiperOptions = {
    slidesPerView: 1,
    keyboard: true,
    pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
    navigation: false,
    loop: true,
    speed: 500,
    effect: 'slide',
  }
  donutsData: shopModel[] = [];

  constructor(
    private readonly donutService: AddProductService,
  ) {}

  ngOnInit() {
    this.donutsData = this.donutService.getAll();
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({})
    }
      }

  onSwiper(swiper){
    console.log(swiper);
 }


    displayedColumns: string[] = ['nazwa', 'ilosc_polubien','cena']
}
