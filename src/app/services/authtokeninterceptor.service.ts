import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthtokeninterceptorService implements HttpInterceptor {

  constructor(public userservice: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(!token){
      const sociallogintoken = localStorage.getItem('sociallogintoken');
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${sociallogintoken}`
        }
      });
      
      return next.handle(request);
    }
    else{
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}

}
