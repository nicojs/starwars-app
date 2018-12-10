import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isGeorgeLucas() {
    return Promise.resolve(false);
  }
}
