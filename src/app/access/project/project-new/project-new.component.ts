import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  newprojectForm = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    preciobase: ['', Validators.required]
  })

  _onSubmit() {
    if (this.newprojectForm.valid) {
      console.log(this.newprojectForm.value);
    } else {
      alert("no es valido")
    }
  }

  ngOnInit(): void {
  }

}
