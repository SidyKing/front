
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;
  returnUrl : string;
  message = '';
  hide = true;
  constructor( 
    private formBulder : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService,
  ) { 

  }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email : [''],
      password :['']
    })
  }
  get value(){
    return this.loginForm.controls;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.authenticate(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        results=>{
          if (results.email) {
            console.log('role:'+results.role);
          let tokenStr = "Bearer " + results.token;
          console.log(tokenStr);
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("role", results.role);
          sessionStorage.setItem("id", results.id);
          sessionStorage.setItem("email", results.email);
          this.router.navigate(['/etudiant']);
          }else{
            this.message="Login et/ou mot de passe incorrect !"
          }
        },
        error=>{
          console.log(error);
          this.message="Login et/ou mot de passe incorrect !"
        }
      )
      
    }
  }

}
