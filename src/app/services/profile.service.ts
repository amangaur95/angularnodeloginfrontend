import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  uri="https://angularnodelogin.herokuapp.com/zom";

  constructor(private http:HttpClient) { }

  getUserInfo(): Observable<any>{
    return this.http.get(`${this.uri}/getprofile`);
  }
}