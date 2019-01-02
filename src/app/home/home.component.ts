import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PresentListService } from '../services/present-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  presents: Observable<any[]>;

  constructor(
    private authService:AuthService,
    private presentListService: PresentListService )
    { this.presents = this.presentListService.presents; }

  logout(){
    this.authService.logout();
  }

  
  ngOnInit() {
  }

}
