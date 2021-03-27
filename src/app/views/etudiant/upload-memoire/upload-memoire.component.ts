import { UploadService } from './../../../services/upload-memoire/upload.service';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-upload-memoire',
  templateUrl: './upload-memoire.component.html'
})
export class UploadMemoireComponent implements OnInit {
  uploadMemoireForm: FormGroup;
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

    const etudiant = sessionStorage.getItem("id");

  }

  ngOnInit(): void {
    this.uploadMemoireForm = this.formBuilder.group({
      image: ['']
    })
  }
  get value() {
    return this.uploadMemoireForm.controls;
  }

  // Onchange
  onChange(event) {
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   this.patientForm.get('uploadImg').setValue(file);
    // }
    console.log("commence");
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

  onSubmit() {
    this.submitted = true;
    console.log(this.fileSelected)
    if (this.uploadMemoireForm.invalid) {
      return;
    } else {
      if (this.fileSelected) {
        const body = new FormData();
        body.append('fichier', this.fileSelected, this.fileSelected.name)
        body.append('idProj', '603c100c99ca52503893c721');
        this.uploadService.upload(body).subscribe(result => {
          console.log(result);
          this.router.navigate(['/etudiant']);
        }, error => {

        });
      } else {
        console.log("Rien ne va !")
      }
    }
  }

}
