import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

export class IsGeorgeLucas implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate() {
    return this.auth.isGeorgeLucas();
  }
}
