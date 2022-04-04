import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: any = []
  apartments: any = []

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService,
    private ar: ActivatedRoute
  ) { }

  _obtenerProyecto(idProyecto: number){
    this.ps._getProjects().subscribe((rest: any) =>{
      this.projects = rest.data.filter((item: {id: number}) => item.id == idProyecto);
      console.log(this.projects);
    })
  }

  _obtenerDepartamentos(idProyecto: number){
    this.as._getApartments().subscribe((rest: any) =>{
      this.apartments = rest.data.filter((item: {projectId: number}) => item.projectId == idProyecto);
    })
  }

  ngOnInit(): void {

    this.ar.params.subscribe(( p: Params) =>{
      if(p["idproject"]){
        this._obtenerProyecto(p["idproject"]);
        this._obtenerDepartamentos(p["idproject"]);
      }
    })
  }

}
