import { Component, OnInit } from '@angular/core';
import { PresentListService, IpresentList } from '../services/present-list.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-thankyou-letters',
  templateUrl: './thankyou-letters.component.html',
  styleUrls: ['./thankyou-letters.component.scss']
})
export class ThankyouLettersComponent implements OnInit {
  user;
  presentList: Observable<IpresentList[]>;

  constructor(
    private presentListService: PresentListService,
    private authService: AuthService
  ) { this.presentList = this.presentListService.presentList;
      this.user = this.authService.user;}

  ngOnInit() {
  }

}
