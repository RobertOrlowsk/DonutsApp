import { Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'welcome-page',
  templateUrl: 'welcome-page.component.html',
  styleUrls: ['welcome-page.component.css'],
})
export class WelcomePageComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }
  shop(){
    this.router.navigate(['/shop'])
  }
}
