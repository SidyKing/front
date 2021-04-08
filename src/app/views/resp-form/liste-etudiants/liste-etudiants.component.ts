

import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
})
export class ListeEtudiantsComponent implements OnInit {
  allEtudiants;
  adminForm : FormGroup;
  submitted = false;
  returnUrl : string;
  message = '';
  hide = true;
  classe: string;
  constructor( 
    private formBulder : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService,
  ) { 
   

  }
  ngOnInit(): void {
    this.authService.listeEtudiant().subscribe(data => {
      this.allEtudiants = data;
    });
      
      this.route.queryParamMap
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.classe = params.get('classe');
        console.log(this.classe); // popular
    }) ;
    }

}

