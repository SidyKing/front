import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm : FormGroup;
  submitted = false;
  constructor(
    private formBulder : FormBuilder) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.formBulder.group({
      email:['',Validators.required]
    })
  }

  get f() { return this.ForgetPasswordForm.controls; }

  get value(){
    return this.ForgetPasswordForm.controls;
  }

  onSubmit(){
    this.submitted =true;
    
    if(this.ForgetPasswordForm.invalid){
      return ;
    }
}
}
