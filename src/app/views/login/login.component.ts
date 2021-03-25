
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
  onSubmit(){
    this.submitted =true;
    if(this.loginForm.invalid){
      return ;
    }else{
      console.log(this.loginForm.value.email,this.loginForm.value.password);
      this.authService.authenticate(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        resultat => { 
          console.log({resultat: resultat})
          this.submitted = false;
          this.router.navigate(['/etudiant']);
          
        },
        error =>{
          console.log(error);
          this.message = 'email ou mot de passe incorrect';
        }
      )
    }
  
  }

}
