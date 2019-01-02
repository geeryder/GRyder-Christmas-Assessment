import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PresentListService, IpresentList } from '../services/present-list.service';
import { AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  presentList: Observable<any[]>;
  presentListCollection: AngularFirestoreCollection;


  constructor(
    private authService:AuthService,
    private presentListService: PresentListService 
    )
    { this.presentList = this.presentListService.presentList; }

  logout(){
    this.authService.logout();
  }

  upload(presentList : IpresentList[]){
    this.presentListService.upload(presentList);
  }

  
  ngOnInit() {
  }

}
