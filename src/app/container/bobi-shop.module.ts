import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NewsPageComponent} from "./components/news-page/news-page.component";

import {MyProfileComponent} from "./components/my-profile-page/my-profile.component";
import {SwiperModule} from "swiper/angular";
import {ShopPageComponent} from "./components/shop-page/shop-page.component";
import {AddProductService} from "./services/add-product.service";
import {RatingModule} from "ng-starrating";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {path: 'news', component: NewsPageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: 'my-profile', component: MyProfileComponent},
]

@NgModule({
  declarations: [
    NewsPageComponent,
    ShopPageComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SwiperModule,
    RatingModule,
    MatTableModule,
  ],
  providers: [
    AddProductService
  ],

})
export class BobiShopModule {}
