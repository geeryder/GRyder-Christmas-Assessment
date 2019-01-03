import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PresentListService, IpresentList, IpresentListID } from '../services/present-list.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user;
  presentList: Observable<IpresentList[]>;
  presentListCollection: AngularFirestoreCollection;
  max: number = 5;
  rate: number = 2;

  constructor(
    private authService: AuthService,
    private presentListService: PresentListService,
    ) { this.presentList = this.presentListService.presentList;
    this.user = this.authService.user; }



  logout() {
    this.authService.logout();
  }

  upload(presentList: IpresentList[]) {
    this.presentListService.upload(presentList);
  }

  update(presentList: IpresentListID) {
    this.presentListService.update(presentList);
  }

  delete(presentList: IpresentListID) {
    this.presentListService.delete(presentList);
  }


  ngOnInit() {
  }

}
