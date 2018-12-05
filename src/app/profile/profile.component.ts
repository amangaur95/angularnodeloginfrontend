import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  user_id: any;

  constructor(private profileservice: ProfileService,
    private userservice: UserService,
    private router:Router,
    private activatedRoite:ActivatedRoute) {
      this.activatedRoite.params.subscribe(params=>{
        this.user_id = params['id'];
      })
     }

  ngOnInit() {
    this.profileservice.getUserInfo(this.user_id)
    .subscribe((result_userinfo)=>{
      if(result_userinfo.code==200){
        this.user=result_userinfo.user.name;
      }
      if(result_userinfo.code==403){
        this.userservice.logout();
        this.router.navigate(['login'])
      }
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
