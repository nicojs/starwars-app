import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';


export class HttpErrorHandler implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const nextRequest = req.clone({ headers: req.headers.set('Authenticate', 'Basic: Base64Encoded') });
    return next.handle(nextRequest).pipe(
      catchError<any, any>(error => {
        console.error(`Caught general error`, error);
        return of();
      })
    );
  }
}
