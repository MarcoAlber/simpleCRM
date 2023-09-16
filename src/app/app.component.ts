import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';
  path: any;

  constructor(private router: Router) {
    this.updateToolbarName();
  }

  updateToolbarName() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
        let urlSegments = snapshot.url.split('/');
        if (urlSegments.length > 1) {
          this.path = urlSegments[1];
          this.path = this.path.charAt(0).toUpperCase() + this.path.slice(1);
        }
      }
    });
  }
}