import { Component } from '@angular/core';
import { Apartment } from '../core/models/Apartment';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
  
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpeg' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg' },
    { id: 4, name: 'El Anber', address: 'Manzah 5', image: '../../assets/images/R4.jpg' }
  ];

  listApartments: Apartment[] = [
    {
      id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: 'oui', surfaceTerrace: 20,
      category: 'S+1', description: 'Appartement S+1', residence: this.listResidences[0]
    },
    {
      id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: 'non', surfaceTerrace: 0,
      category: 'S+2', description: 'Appartement S+2', residence: this.listResidences[0]
    },
    {
      id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: 'oui', surfaceTerrace: 30,
      category: 'S+3', description: 'Appartement S+3', residence: this.listResidences[1]
    },
    {
      id: 4, appartNum: 4, floorNum: 0, surface: 120, terrace: 'non', surfaceTerrace: 0,
      category: 'S+2', description: 'Appartement S+2', residence: this.listResidences[2]
    }
  ];

  apartments: Apartment[] = [];
  favorites: Apartment[] = [];
  searchSurface: number | undefined;

  showApartments(residence: Residence): void {
    this.apartments = this.listApartments.filter(apartment => apartment.residence.id === residence.id);
  }

  addToFavorites(apartment: Apartment): void {
    if (!this.favorites.find(a => a.id === apartment.id)) {
      this.favorites.push(apartment);
    }
  }

  filterApartmentsBySurface(): void {
    if (this.searchSurface !== undefined) {
      const filteredApartments = this.listApartments.filter(apartment => apartment.surface === this.searchSurface);
      console.log('Filtered Apartments:', filteredApartments);
      // Afficher les appartements filtrés dans le template
    }
  }

  removeFromFavorites(apartment: Apartment): void {
    const index = this.favorites.findIndex(a => a.id === apartment.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}