import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  contactusForm = this.fb.group({
    nombre: [''],
    apellido:[''],
    correo:[''],
    mensaje:['']
  })

  _onSubmit(){
    console.log(this.contactusForm.value);
  }

  ngOnInit(): void {
  }

}
