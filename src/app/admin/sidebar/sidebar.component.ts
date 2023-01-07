import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public isCollapsed = false;

  constructor(private apiservice: ApiService, private router: Router) {}

  public logout(): void {
    this.apiservice.signOut();
    this.router.navigate(['']);
  }
}
