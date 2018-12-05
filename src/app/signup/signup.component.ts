import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';
import { SignupService } from '../services/signup.service';
import { ForgotpasswordService } from '../services/forgotpassword.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  angForm: FormGroup;
  exists_message: any;
  display: boolean = false;
  provider_name: any;
  email: any;
  facebook_provider: any;
  google_provider: any;
  linkedin_provider: any;
  twitter_provider: any;

  constructor(private userservice: UserService,
  private fb: FormBuilder,
  private router:Router,
  private toasterService:ToasterService,
  private signupservice:SignupService,
  private forgotpasswordservice:ForgotpasswordService,
  ) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)] ],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)] ],
      email: ['', [Validators.required,  Validators.pattern(/^\S*$/), Validators.email] ],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^\S*$/),
        Validators.minLength(6), Validators.maxLength(15)]) ]
   });
  }

  addUser(){
    if(this.angForm.valid) {
      this.signupservice.addUser(this.angForm.value)
      .subscribe((result)=>{
        if(result.code==200){
          this.router.navigateByUrl('/login');
          this.toasterService.successToaster(result.msg.str1, result.msg.str2)
        }
        else{
          if(result.exists_message){
            this.exists_message=result;
            this.provider_name=this.exists_message.provider_name;
            for(let i=0;i<this.provider_name.length;i++){
              if(this.provider_name[i]=='facebook'){
                this.facebook_provider=this.provider_name[i];
              }
              if(this.provider_name[i]=='google'){
                this.google_provider=this.provider_name[i];
              }
              if(this.provider_name[i]=='linkedin'){
                this.linkedin_provider=this.provider_name[i];
              }
              if(this.provider_name[i]=='twitter'){
                this.twitter_provider=this.provider_name[i];
              }
            }
            this.email=this.exists_message.email;
            this.display = true;
          }
          else{
            this.toasterService.errorToaster(result.msg.msg1,result.msg.msg2);
            this.angForm.reset();
          }
        }
      })
    } 
    else {
      Object.keys(this.angForm.controls).forEach((formControl: any) => {
        this.angForm.controls[formControl].markAsDirty()
      })
    }
    
  }

  setPassword(){
    this.forgotpasswordservice.setPassword(this.email)
    .subscribe((password_status)=>{
      if(password_status.code==200){
        this.display = false;
        this.toasterService.successToaster(password_status.successmessage.msg1,password_status.successmessage.msg2);
      }
      else{
        this.toasterService.errorToaster(password_status.failuremessage.msg1,password_status.failuremessage.msg2);
      }
    },
    (err)=>{
      console.log(err);
    })
  }

  ngOnInit() {
  }

  facebookLogin(){
    window.location.href = "https://angularnodelogin.herokuapp.com/auth/facebook" ; //
  }

  googleLogin(){
    window.location.href = "https://angularnodelogin.herokuapp.com/auth/google" ;
  }

  twitterLogin(){
    window.location.href = "https://angularnodelogin.herokuapp.com/auth/twitter" ;
  }

  linkedinLogin(){ 
    window.location.href = "https://angularnodelogin.herokuapp.com/auth/linkedin" ; 
  }
  
}
