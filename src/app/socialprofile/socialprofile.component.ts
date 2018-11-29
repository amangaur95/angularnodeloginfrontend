import { Component, OnInit } from '@angular/core';
import { SocialloginService } from '../services/sociallogin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-socialprofile',
  templateUrl: './socialprofile.component.html',
  styleUrls: ['./socialprofile.component.css']
})
export class SocialprofileComponent implements OnInit {
  user_details: any;
  token: any;

  constructor(private socialloginservice:SocialloginService,
    private activatedroute: ActivatedRoute,
    private userservice: UserService,
    private router: Router) {
      this.activatedroute.params.subscribe(params => {
        this.token = params['token'];
        localStorage.setItem('token',this.token);
      })
     }

  ngOnInit() {
    this.getSocialProfile(this.token);
  }

  getSocialProfile(token){
    this.socialloginservice.getSocialProfile(token)
    .subscribe((result_profile)=>{
      this.user_details = result_profile.user;
    },
    (err)=>{
      if(err.status==401){
        this.userservice.logout();
        this.router.navigate(['login'])
      }
      console.log(err);
    })
  }
}