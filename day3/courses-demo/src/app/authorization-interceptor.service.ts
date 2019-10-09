import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone({
      setHeaders:{
        'Authorization':`Bearer ${JSON.parse(localStorage.getItem('user'))['token']}`
      }
    }

    )
    return next.handle(req);
  }
}
