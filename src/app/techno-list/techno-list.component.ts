import { TechnoService } from './../services/techno.service';
import { Component, OnInit } from '@angular/core';
import { Technologie } from '../models/Technologie';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {

  // On definit la variable qui sera appellée coté html en public
  public allTechnos = [];

  // Le constructor de la classe qui fait appelle au service (ici le service d'informations)
  constructor(private ts: TechnoService) { }

  // Dès que le component est initialisé on appelle la methode getTechnos
  ngOnInit(): void {
    this.getTechnos();
    console.log(this.allTechnos)
  }

  // La methode getTechnos qui recupere les informations
  getTechnos() {
    this.allTechnos = this.ts.getTechnos();
  }

}
