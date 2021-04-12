import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-ajout-rapporteur',
  templateUrl: './ajout-rapporteur.component.html'
})
export class AjoutRapporteurComponent implements OnInit {
  allProfesseurs;
  ajoutRapporteurForm : FormGroup;
  submitted = false;
  returnUrl : string;
  message = '';
  hide = true;
  idEtudiant: string;
  idProf: string;
  constructor( 
    private formBulder : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService,
  ) { 
   

  }
  ngOnInit(): void {
    
    this.authService.listeProfesseur().subscribe(data => {
      this.allProfesseurs = data;
      
    }) ;

    this.route.queryParamMap
    .subscribe(params => {
      console.log(params); 

      this.idEtudiant = params.get('idEtudiant');
      console.log(this.idEtudiant); 
      this.idProf = params.get('idProf');
      console.log(this.idProf); 
  }) ;
    }

    onSubmit() {
      this.submitted =true;
  
      if (this.ajoutRapporteurForm.invalid) {
        return;
      } 
      else {
        this.authService.ajoutRapporteur(this.idEtudiant, this.idProf).subscribe(
          results=>{
            console.log(results)
          }
        )}
    }
    
            

}
