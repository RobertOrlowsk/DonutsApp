import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {BobiShopModule} from "./container/bobi-shop.module";
import {WelcomePageComponent} from "./container/components/welcome-page/welcome-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: WelcomePageComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
      RouterModule.forRoot(routes, {useHash: true}),
      BobiShopModule,
      BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
