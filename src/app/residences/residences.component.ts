import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { Apartment } from './../core/models/Apartment';


@Component({
  selector: 'app-residences',
  templateUrl: '../residences/residences.component.html',
  styleUrls: ['../residences/residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg" },
    { id: 4, name: "El Anber", address: "Manzah 5", image: "../../assets/images/R4.jpg" }
  ];

  listApartments: Apartment[] = [
    { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: "oui", surfaceTerrace: 20, category: "S+1", description: "Appartement S+1", residence: this.listResidences[0] },
    { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: "non", surfaceTerrace: 0, category: "S+2", description: "Appartement S+2", residence: this.listResidences[0] },
    { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: "oui", surfaceTerrace: 30, category: "S+3", description: "Appartement S+3", residence: this.listResidences[1] }
  ];

  selectedResidenceApartments: Apartment[] = [];

  showApartments(residence: Residence) {
    // Réinitialiser la liste des appartements sélectionnés
    this.selectedResidenceApartments = [];

    // Filtrer les appartements de la résidence sélectionnée
    this.selectedResidenceApartments = this.listApartments.filter(apartment => apartment.residence.id === residence.id);

    // Si aucun appartement trouvé, afficher un message
    if (this.selectedResidenceApartments.length === 0) {
      console.log("No Apartment found");
    }
  }


favoriteApartments: Apartment[] = [];
addToFavorites(apartment: Apartment) {
  // Ajoutez l'appartement à la liste de favoris
  this.favoriteApartments.push(apartment);
  console.log("Apartment added to favorites:", apartment);
}

surfaceFilter: number | null = null;
filterApartmentsBySurface() {
  if (this.surfaceFilter !== null) {
    this.selectedResidenceApartments = this.listApartments.filter(apartment => apartment.surface === this.surfaceFilter);
  } else {
    this.selectedResidenceApartments = this.listApartments;
  }
}

removeFromFavorites(apartment: Apartment) {
  // Retirez l'appartement de la liste des favoris en utilisant son index
  const index = this.favoriteApartments.indexOf(apartment);
  if (index !== -1) {
    this.favoriteApartments.splice(index, 1);
  }
}

}
