import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const token = '123';
  const headers = req.headers.append('Auth-Token', token);
  const authReq = req.clone({ headers }); // requests are immutable
  return next(authReq);
}
