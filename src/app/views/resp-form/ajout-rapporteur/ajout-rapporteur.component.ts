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
  rapporteurs=[];
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

  this.authService.getEncadreurs(this.idEtudiant).subscribe(data => {
    this.rapporteurs = data;
    console.log(this.rapporteurs);

  }) ;
    }

    onSubmit(idProf) {
      this.submitted =true;    
        this.authService.ajoutRapporteur(idProf, this.idEtudiant)
        .subscribe(
          results=>{
            console.log(results)
          }
        )
        this.router.navigate(['./resp-form/ajout-rapporteur']);
      }
        

    
    
            

}
