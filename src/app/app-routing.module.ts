import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  // Ajoutez d'autres routes ici
  { path: '', redirectTo: '/residences', pathMatch: 'full' } // Redirige vers la page des résidences par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
