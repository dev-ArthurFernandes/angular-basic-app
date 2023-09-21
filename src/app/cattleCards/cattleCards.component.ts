import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cattle } from '../cattle';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <section class="listing">
      <div class="listing-photo-div">
        <img class="listing-photo" [src]="cattle.photo" alt="Exterior photo of {{cattle.name}}">
      </div>
      <h2 class="listing-heading">{{ cattle.name }}</h2>
      <p class="listing-location">{{ cattle.city}}, {{cattle.state }}</p>
      <a [routerLink]="['/details', cattle.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./cattleCards.component.css']
})

export class CattleCardComponent {
  @Input() cattle!: Cattle;
}