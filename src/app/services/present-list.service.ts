import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export interface IpresentList {
  theirName: string;
  relationship: string;
  picture: any;
  description: string;
  rating: number;
  userID: string;
  date;
  letterSent: boolean;
}

export interface IpresentListID extends IpresentList {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class PresentListService {
  errorMessage: string;


  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) {}


  get presentListCollection() {
    return this.afs.collection<IpresentList[]>('presentList',
     (ref) => ref.where('userID', '==', this.auth.user.uid)
     .orderBy('date', 'desc'));
  }

  get presentList(): Observable<IpresentList[]> {
    return this.presentListCollection.snapshotChanges()
    .pipe(map(this.includeCollectionID));
  }

  upload(presentList: IpresentList[]) {
    const payload = {
      userID : this.auth.user.uid,
      date: new Date(),
      letterSent: false,
      ... presentList
    };
    return this.presentListCollection.add(payload)
    .catch((error: Error) => {
      console.log(error);
    });
  }

  includeCollectionID(docChangeAction) {
    return docChangeAction.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }

  update(presentList: IpresentListID) {
    return this.presentListCollection.doc(presentList.id)
    .update({ presentList: presentList.letterSent });
  }

  delete(presentList: IpresentListID) {
    return this.presentListCollection.doc(presentList.id)
    .delete();
  }



}
