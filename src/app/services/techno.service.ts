import { Injectable } from '@angular/core';
import { Technologie } from '../models/Technologie';

@Injectable({
  providedIn: 'root'        // Sera disponible partout avec le provided root
})
export class TechnoService {
  private technos: any = [];

  constructor() { }

  createTechno(techno: Technologie) {
    // On cree un id pour identifier chaque element
    const newTechno = {id: Date.now(), ...techno};
    this.technos  = [newTechno ,...this.technos];    // technos appartient à la classe donc on ajoute this
    console.log(this.technos);
  }

  getTechnos() {
    return this.technos
  }

  deleteTechnos(techno : Technologie ){
    // Pour effacer, si la techno a un id different de celui passé en paramètre alors on la garde
    // Effacement par filtration des éléments
    this.technos = this.technos.filter(t => t.id !== techno.id);
  }
}
