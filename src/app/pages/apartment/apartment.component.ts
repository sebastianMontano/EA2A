import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

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

  _obtenerDepartamentos(idProyecto: number , idDepartamento: number){
    this.as._getApartments().subscribe((rest: any) =>{
      this.apartments = rest.data.filter((item: {projectId: number , id: number}) => item.projectId == idProyecto && item.id == idDepartamento);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["idproject"] && p["iddepartamento"]){
        this._obtenerProyecto(p["idproject"]);
        this._obtenerDepartamentos(p["idproject"],p["iddepartamento"]);
      } 
    } )
  }

}
