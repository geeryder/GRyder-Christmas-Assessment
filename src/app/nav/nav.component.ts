import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() pageTitle: string;


  constructor(
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
  }


  ngOnInit() {
  }

}
