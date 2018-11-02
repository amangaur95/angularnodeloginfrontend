import { Component, OnInit } from '@angular/core';
import { SocialloginService } from '../services/sociallogin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-socialprofile',
  templateUrl: './socialprofile.component.html',
  styleUrls: ['./socialprofile.component.css']
})
export class SocialprofileComponent implements OnInit {
  user_details: any;
  token: any;

  constructor(private socialloginservice:SocialloginService,
    private activatedroute: ActivatedRoute) {
      this.activatedroute.params.subscribe(params => {
        this.token = params['token'];
        console.log(this.token);
        localStorage.setItem('token',this.token);
      })
     }

  ngOnInit() {
    this.getSocialProfile(this.token);
    // this.socialProfile(localStorage.getItem('sociallogintoken'));
  }

  getSocialProfile(token){
    this.socialloginservice.getSocialProfile(token)
    .subscribe((result_profile)=>{
      console.log(result_profile,"from ts")
      this.user_details = result_profile.user;
    })
  }
  // socialProfile(sociallogintoken){
  //   this.socialloginservice.getSocialProfile(sociallogintoken)
  //   .subscribe((result_profile)=>{
  //     this.user_details = result_profile.user;
  //   },
  //   (err)=>{
  //     console.log(err);
  //   })
  // }
}