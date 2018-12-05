import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialprofileComponent } from './socialprofile/socialprofile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:SignupComponent },
  { path:'emailverify/:id', component:EmailverifyComponent },
  { path:'forgotpassword', component:ForgotpasswordComponent },
  { path:'passwordreset/:id', component:ResetpasswordComponent },
  { path:'profile/:id', component:ProfileComponent, canActivate:[AuthGuardService] },
  { path:'socialprofile/:token', component:SocialprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
