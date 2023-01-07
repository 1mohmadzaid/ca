import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  public uid: any;
  public loginId = localStorage.getItem('login_id');
  constructor(private afAuth: AngularFireAuth, private _router: Router) {}
  canActivate() {
    this.afAuth.onAuthStateChanged((user) => {
      this.uid = user?.uid;
    });
    if (this.uid === this.loginId) {
      return true;
    } else {
      return false;
    }
  }
}
