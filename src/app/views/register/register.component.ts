import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  RegisterForm : FormGroup;
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
    this.RegisterForm = this.formBulder.group({
      classe :[''],
      dateNaissance :[''],
      numTel :[''],
      nom :[''],
      prenom :[''],
      email : [''],
      password :[''], 
      login :[''],
    })
  }
  get value(){
    return this.RegisterForm.controls;
  }
  onSubmit(){
    this.submitted =true;
    if(this.RegisterForm.invalid){
      return ;
    }else{
      console.log(this.RegisterForm.value.email,this.RegisterForm.value.password);
      this.authService.Register(this.RegisterForm.value.classe,
                                this.RegisterForm.value.dateNaissance,
                                this.RegisterForm.value.numTel,
                                this.RegisterForm.value.nom,
                                this.RegisterForm.value.prenom,
                                "ETUDIANT",
                                this.RegisterForm.value.email,
                                this.RegisterForm.value.password,
                                this.RegisterForm.value.login)
                      .subscribe(
                        resultat => { 
                          console.log({resultat: resultat})
                          this.submitted = false;
                          this.router.navigate(['/login']);
                          
                        },
                        error =>{
                          console.log(error);
                          this.message = 'email ou mot de passe incorrect';
                        }
                      )
    }
  
  }

}
