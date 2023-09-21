import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CattleService } from '../cattle.service';
import { Cattle } from '../cattle';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="cattle?.photo" alt="Exterior photo of {{cattle?.name}}"/>
      <section class="listing-description">
        <span>Nome</span>
        <h2 class="listing-heading">{{cattle?.name}}</h2>
        <span>Localização</span>
        <p class="listing-location">{{cattle?.city}}, {{cattle?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Sobre</h2>
        <ul>
        <li>Idade: {{cattle?.age}}</li>
        <li>Preço: {{cattle?.price}}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  cattleService = inject(CattleService);
  cattle: Cattle | undefined;


  constructor() {
    const cattleId = parseInt(this.route.snapshot.params['id'], 10);
    
    this.cattleService.getCattleById(cattleId)
      .then(cattle => {
        this.cattle = cattle;
      })
  } 
}
