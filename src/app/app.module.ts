import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableauProduitsComponent } from './tableau-produits/tableau-produits.component';
import { ResidencesComponent } from './residences/residences.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauProduitsComponent,
    ResidencesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]) // Configuration du routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
