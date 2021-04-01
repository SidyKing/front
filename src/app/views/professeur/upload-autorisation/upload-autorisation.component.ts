import { UploadService } from './../../../services/upload-autorisation/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-upload-autorisation',
  templateUrl: './upload-autorisation.component.html',
})
export class UploadAutorisationComponent implements OnInit {
  uploadAutorisationForm: FormGroup;
  fileSelected: File;
  imageUrl: any;
  submitted = false;
  returnUrl: string;
  message = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadService,

  ) {

    const professeur = sessionStorage.getItem("id");

  }

  ngOnInit(): void {
    this.uploadAutorisationForm = this.formBuilder.group({
      image: [null],
      hide :['rien']
    })
  }
  get value() {
    return this.uploadAutorisationForm.controls;
  }

  // Onchange
  onChange(event) {
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   this.patientForm.get('uploadImg').setValue(file);
    // }
    console.log("commence ici");
    if (event.target.files[0]) {
      this.fileSelected = event.target.files[0] as File;
      const reader = new FileReader();
      reader.readAsDataURL(this.fileSelected);
      reader.onload = (event: any) => {
        this.imageUrl = reader.result;
        //console.log(this.imageUrl)
      };
    }
  }

  envoyer() {
    this.submitted = true;
    console.log("Bienvenue")
    if (this.uploadAutorisationForm.invalid) {
      console.log("Erreur d'upload")
      return;
    } else {
      if (this.fileSelected) {
        const body = new FormData();
        body.append('fichier', this.fileSelected, this.fileSelected.name)
        body.append('idProj', '603c100c99ca52503893c721');
        this.uploadService.upload(body).subscribe(result => {
          console.log(result);
          this.router.navigate(['/dashboard']);
        }, error => {

        });
      } else {
        console.log("Rien ne va !")
      }
    }
  }

}

