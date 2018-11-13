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

  login(user_info): Observable<boolean> {
    return this.http.post<{token,user,msg,code}>(`${this.uri}/signin`, user_info)
      .pipe(
        map(result => {
          if(result.code==200){
            localStorage.setItem('token', result.token); 
            this.toasterservice.successToaster(result.msg.str1, result.msg.str2);
            return true;
          }
          else{
            this.toasterservice.errorToaster(result.msg.str1, result.msg.str2);
            return false;
          }
        })
      );
  }
}
