import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { ToasterService } from '../services/toaster.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:number;
  email:any;
  returnUrl: string;

public error:string;
  angForm: FormGroup;
  user: any;
  user_id: any;

  constructor(private userservice: UserService,
    private fb: FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    private activateRoute:ActivatedRoute,
    private loginservice:LoginService,
    private toasterservice:ToasterService,
    ) { 
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      remember_me: ['']
   });
  }

  public submit(){
    if(this.angForm.valid){
      this.loginservice.login(this.angForm.value)
      .subscribe((login_status)=>{
        if(login_status.code==200){
          localStorage.setItem('token', login_status.token);
          this.user_id = login_status.user._id;
          this.router.navigateByUrl('/profile/'+this.user_id);
          this.toasterservice.successToaster(login_status.msg.str1, login_status.msg.str2);
        }
        else{
          this.toasterservice.errorToaster(login_status.msg.str1, login_status.msg.str2);
        }
      },
      (err)=>{
        console.log(err);
      })
    }
    else{
      Object.keys(this.angForm.controls).forEach((formControl: any) => {
        this.angForm.controls[formControl].markAsDirty()
      })
    }
  }

  showSuccess() {
    this.toastr.success('You Successfully LoggedIn', 'Toastr fun!');
  }

  ngOnInit() {
    this.userservice.logout();
  }

  facebookLogin(){
    window.location.href = "https://angularnodelogin.herokuapp.com/auth/facebook" ;
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