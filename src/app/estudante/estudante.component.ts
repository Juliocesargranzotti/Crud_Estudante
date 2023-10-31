import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudanteService } from '../estudante.service';
import { Estudante } from './../estudante';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  estudante : Estudante[] = [];
  isEditing : boolean = false;
  formGroupClient: FormGroup;
  submitted: boolean = false;



  constructor (private estudanteService : EstudanteService, private formBuilder : FormBuilder){

    this.formGroupClient = formBuilder.group({
      id : [''],
      name : ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      course : ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      email : ['', [Validators.required,Validators.email]],
      phone : ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]]
    });
  }

  ngOnInit(): void {
    this.loadEstudante();
  }

  loadEstudante() {
    this.estudanteService.getEstudante().subscribe(
      {
        next : data => this.estudante = data

      }
      );
  }

  save() {
    this.submitted = true;

      if (this.isEditing) {
        this.estudanteService.update(this.formGroupClient.value).subscribe({
          next: () => {
            this.loadEstudante();
            this.formGroupClient.reset();
            this.isEditing = false;
            this.submitted = false;
          }
        })
      }
      else {
        this.estudanteService.save(this.formGroupClient.value).subscribe({
          next: data => {
            this.estudante.push(data);
            this.formGroupClient.reset();
            this.submitted = false;
          }
        })
      }

  }

  clean(){
    this.formGroupClient.reset();
    this.isEditing = false;
    this.submitted = false;
  }

  edit(estudante : Estudante){
    this.formGroupClient.setValue(estudante);
    this.isEditing = true;

  }

  delete(estudante : Estudante){
    this.estudanteService.delete(estudante).subscribe({
      next: () => this.loadEstudante()
    })
  }


  get name(): any {
    return this.formGroupClient.get("name");

  }

  get course(): any {
    return this.formGroupClient.get("course");
  }


  get email(): any {
    return this.formGroupClient.get("email");
  }

  get phone(): any {
    return this.formGroupClient.get("phone");
  }



}
