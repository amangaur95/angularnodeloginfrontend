import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {

  uri = "https://angularnodelogin.herokuapp.com/zom";
  // url = "http://localhost:3000/zom";
  
  constructor(private http:HttpClient) { }

  socialLogin(user): Observable<any>{
    return this.http.post(`${this.uri}/sociallogin`,user);
  }

  getSocialProfile(logintoken): Observable<any>{
    return this.http.post(`${this.uri}/socialprofile`,{logintoken:logintoken});
  }

}