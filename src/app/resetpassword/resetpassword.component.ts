import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ResetpasswordService } from '../services/resetpassword.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm:FormGroup;
  id: any;

  constructor(private fb:FormBuilder,
    private resetpasswordservice:ResetpasswordService,
    private activatedroute:ActivatedRoute,
    private router:Router,
    private toasterservice:ToasterService) {
      this.activatedroute.params.subscribe(params=>{
        this.id=params['id'];
      })
      this.createForm();
   }

  createForm(){
    this.resetPasswordForm=this.fb.group({
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^\S*$/),
        Validators.minLength(6), Validators.maxLength(15)]) ],
      confirm_password: ['', Validators.required]
    }, {validator: this.checkPasswords })
  }
  
  resetPassword(){
    if(this.resetPasswordForm.valid){
      this.resetpasswordservice.resetPassword(this.resetPasswordForm.value,this.id)
      .subscribe((result_resetpasswordstatus)=>{
        if(result_resetpasswordstatus.code==200){
          this.router.navigateByUrl('/login');
          this.toasterservice.successToaster(result_resetpasswordstatus.successmessage.msg1,result_resetpasswordstatus.successmessage.msg2);
        }
        else{
          this.toasterservice.errorToaster(result_resetpasswordstatus.failuremessage.msg1,result_resetpasswordstatus.failuremessage.msg2);
        }
      },
      (err)=>{
        console.log(err);
      })
    }
    else{
      Object.keys(this.resetPasswordForm.controls).forEach((formControl : any) => {
        this.resetPasswordForm.controls[formControl].markAsDirty()
      })
    }
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let password = group.controls.password.value;
    let confirm_password = group.controls.confirm_password.value;

    return password === confirm_password ? null : { notSame: true }     
  }
  ngOnInit() {
  }

}
