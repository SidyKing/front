import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
let etudiant = sessionStorage.getItem("id");

@Component({
  selector: 'app-upload-memoire',
  templateUrl: './upload-memoire.component.html'
})
export class UploadMemoireComponent implements OnInit {
  UploadMemoireForm : FormGroup;
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
    this.UploadMemoireForm = this.formBulder.group({
      fichier : []
    })
  }
  get value(){
    return this.UploadMemoireForm.controls;
  }
  
  onSubmit(){
    this.submitted =true;
    if(this.UploadMemoireForm.invalid){
      return ;
    }else{
      console.log(this.UploadMemoireForm.value.sujet);
      this.authService.uploadMemoire(this.UploadMemoireForm.value.fichier).subscribe(
        resultat => { 
          console.log({resultat: resultat})
          this.submitted = false;
          this.router.navigate(['/etudiant/upload-memoire']);
          
        },
        error =>{
          console.log(error);
          this.message = 'erreur données projet';
        }
      )
    }
  
  }

}

