import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  uri="https://angularnodelogin.herokuapp.com/zom"

  constructor(private http:HttpClient,
    private toasterservice:ToasterService) { }

    login(user_info): Observable<any>{
      return this.http.post(`${this.uri}/signin`, user_info);
    }
}
