import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  presents: Observable<any[]>;

  constructor(afs: AngularFirestore,
    private authService:AuthService
    ){
    this.presents = afs.collection('presents').valueChanges();
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
  }

}
