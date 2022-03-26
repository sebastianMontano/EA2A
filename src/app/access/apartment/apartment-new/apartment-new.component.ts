import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  newapartmentForm = this.fb.group({
    tipo: ['', Validators.required],
    nombre: ['', Validators.required],
    area: ['', Validators.required],
    piso: ['',Validators.required]
  })

  _onSubmit() {
    if(this.newapartmentForm.valid){
      console.log(this.newapartmentForm.value);
    }else
    alert("no es valido")
  }

  ngOnInit(): void {
  }

}
