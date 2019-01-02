import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afs: AngularFireAuth,
    private router: Router
    ) { }

    get user(){
      return this.afs.auth.currentUser;
    }

    register(email:string, password:string){
      return this.afs.auth.createUserWithEmailAndPassword(email, password);
    }

    login(email:string, password:string){
      return this.afs.auth.signInWithEmailAndPassword(email, password);
    }

    logout(){
      return this.afs.auth.signOut()
      .then(()=>{
        this.router.navigate(['login'])
      })
      .catch((error:Error)=>{
        throw error.message;
      })
    }



}
