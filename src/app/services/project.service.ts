import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private readonly http: HttpClient
  ) { }

  _getProjects(){
    return this.http.get("http://localhost:4000/api/project/getprojects");
  }

}
