import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentListService {
  presents: Observable<any[]>;

  constructor(
    afs: AngularFirestore,
  ) { this.presents = afs.collection('presents').valueChanges(); }

  


}
