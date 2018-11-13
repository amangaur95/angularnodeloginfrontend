import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SocialprofileComponent } from './socialprofile/socialprofile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './services/authguard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthtokeninterceptorService } from './services/authtokeninterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SocialprofileComponent,
    ResetpasswordComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    ForgotpasswordComponent,
    EmailverifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    DialogModule,
    AngularFontAwesomeModule,
    CheckboxModule
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthtokeninterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
