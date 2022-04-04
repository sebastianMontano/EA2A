import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(
    private readonly http: HttpClient
  ) { }


  _getApartments(){
    return this.http.get("http://localhost:4000/api/apartment/getapartments");
  }

}
