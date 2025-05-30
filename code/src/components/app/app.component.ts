import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms'; // <-- Import this!


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <br>
      <a routerLink="/bookPage">BookPage</a>
      <br>
      <input 
        type="text" 
        placeholder="Search books..." 
        [(ngModel)]="searchQuery" 
        (input)="onSearchChange()" />
    </nav>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet,RouterLink,FormsModule],
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  searchQuery: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSearchChange() {
    const currentUrl = this.router.url.split('?')[0];

    if (currentUrl === '/bookPage') {
      // Already on bookPage → just update query params
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { search: this.searchQuery },
        queryParamsHandling: 'merge',
      });
    } else {
      // Not on bookPage → navigate there and pass the query
      this.router.navigate(['/bookPage'], {
        queryParams: { search: this.searchQuery }
      });
    }
  }
}
