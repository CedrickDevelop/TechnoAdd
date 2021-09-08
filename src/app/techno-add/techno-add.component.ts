import { TechnoService } from './../services/techno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {

  // On injecte dans le constructeur une instance de service importée de techno.service.ts
  constructor(private ts: TechnoService) { }

  ngOnInit(): void {
  }

  addTechno(form:any) {
    console.log(form.value)
    this.ts.createTechno(form.value);
    // Pour effacer les données du formulaire on appelle la methode reset
    form.reset();

  }

}
