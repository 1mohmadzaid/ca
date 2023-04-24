import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor() {}
  canActivate() {
    let loginId = localStorage.getItem('login_id');
    if (loginId) {
      return true;
    } else {
      return false;
    }
  }
}
