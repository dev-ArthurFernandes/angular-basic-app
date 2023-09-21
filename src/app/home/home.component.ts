import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Cattle } from '../cattle';
import { CattleService } from '../cattle.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    RouterLink
  ],
  template: `
    <section class="search">
      <form>
        <input type="text" placeholder="Filter by name"  (input)="filterResults(filter.value)" #filter >
      </form>
      
      <button class="primary" [routerLink]="['/register']">
        Cadastrar
      </button>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let cattleList of filteredCattleList" [cattle]="cattleList"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cattleList: Cattle[] = [];
  filteredCattleList: Cattle[] = [];
  cattleService: CattleService = inject(CattleService);

  constructor() {
    this.cattleService.getAllCattle()
      .then((cattleList: Cattle[]) => {
        this.cattleList = cattleList;
        this.filteredCattleList = cattleList;
      })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCattleList = this.cattleList;
    }

    this.filteredCattleList = this.cattleList.filter(
      cattleList => cattleList?.name.toLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}