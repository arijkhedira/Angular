import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau-produits',
  templateUrl: './tableau-produits.component.html',
  styleUrls: ['./tableau-produits.component.css']
})
export class TableauProduitsComponent {
  produits = [
    { id:1, nom: 'Produit 1', prix: 10, quantite: 18, like: 0 },
    { id:2, nom: 'Produit 2', prix: 20, quantite: 14, like: 0 },
    { id:3, nom: 'Produit 3', prix: 30, quantite: 19, like: 0 }
  ];

  incrementerLike(id: number) {
    this.produits[id].like++;
  }

  incrementerPrix(id: number) {
    this.produits[id].prix--;
  }
  
}

