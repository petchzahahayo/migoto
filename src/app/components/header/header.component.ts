import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  constructor(private router: Router) {}

  goto(path: string) {
    // Navigate silently to /view
    this.router.navigate([`/${path}`], { skipLocationChange: true });
  }
}
