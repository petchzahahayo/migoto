import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(
 
    private router: Router
  ) {}

  goto(path: string) {
    // Navigate silently to /view
    this.router.navigate([`/${path}`], { skipLocationChange: true });
  }
}
