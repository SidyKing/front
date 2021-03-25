import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html'
})
export class EtudiantComponent implements OnInit {
  EtudiantForm : FormGroup;
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
    this.EtudiantForm = this.formBulder.group({
      sujet : [''],
      description :['']
    })
  }
  get value(){
    return this.EtudiantForm.controls;
  }
  onSubmit(){
    this.submitted =true;
    if(this.EtudiantForm.invalid){
      return ;
    }else{
      console.log(this.EtudiantForm.value.sujet,this.EtudiantForm.value.description);
      this.authService.projet(this.EtudiantForm.value.sujet,this.EtudiantForm.value.description).subscribe(
        resultat => { 
          console.log({resultat: resultat})
          this.submitted = false;
          this.router.navigate(['/etudiant']);
          
        },
        error =>{
          console.log(error);
          this.message = 'erreur données projet';
        }
      )
    }
  
  }

}
