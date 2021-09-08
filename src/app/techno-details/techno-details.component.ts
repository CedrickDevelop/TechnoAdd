import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Technologie } from '../models/Technologie';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {

  // On integre un decorateur @input car il fait appel à l'exterieur. Il fera ainsi appel aux informations du parent. Le parent ici est technolistcomponent car l'input est appelle dans ele html de technolist
  // On integre un decorateur @input car il fait appel à l'exterieur. Il fera ainsi appel aux informations du parent. Le parent ici est technolistcomponent car l'input est appelle dans ele html de technolist

  @Input()  tech!: Technologie;
  @Output()  deleteTech!: new () => EventEmitter<Technologie>;

  constructor() { }

  ngOnInit(): void {
  }

  delete(tech: Technologie) {
    this.deleteTech.emit();
  }
}
