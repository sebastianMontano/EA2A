import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    persona: this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required]
    }),
    correo: ['',Validators.required,Validators.email],
    mensaje: ['',Validators.required]
  })

  _onSubmit() {
    if(this.contactusForm.valid){
      console.log(this.contactusForm.value);
    }else
    console.log("no es valido")
  }

  ngOnInit(): void {
  }

}
