import { Component } from '@angular/core';

interface Navigation {
  link: string,
  name: string,
  exact: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // img = [
  //   'assets/svg/dountSvg.svg',
  //   'assets/svg/profileSvg.svg',
  //   'assets/svg/shopSvg.svg'
  // ]

  nav: Navigation[] = [
    {
      link: '/',
      name: 'Strona Główna',
      exact: true,
    },
    {
      link: '/news',
      name: 'Nowości',
      exact: true,
    },
    {
      link: '/shop',
      name: 'Sklep',
      exact: true,
    },
    {
      link: '/my-profile',
      name: 'Mój profil',
      exact: true,
    }
  ]
}
