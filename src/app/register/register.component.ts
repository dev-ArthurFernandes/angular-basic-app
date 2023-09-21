import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CattleService } from '../cattle.service';
import { Cattle } from '../cattle';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule,
  ],
  template: `
    <article>
      <div class="container">
        <form [formGroup]="registerForm" (submit)="submitApplication()">
          <h1>Cadastre</h1>
          <span>
            <label for="name">Nome</label>
            <input type="text" id="name" formControlName="name">
          </span>
          <span>
            <label for="race">Raça</label>
            <input type="text" id="race" formControlName="race">
          </span>
          <span>
            <label for="age">Idade</label>
            <input type="number" id="age" formControlName="age">
          </span>
          <span>
            <label for="price">Preço</label>
            <input type="number" id="price" formControlName="price">
          </span>
          <span>
            <label for="city">Cidade</label>
            <input type="text" id="city" formControlName="city">
          </span>
          <span>
            <label for="state">Estado</label>
            <input type="text" id="state" formControlName="state">
          </span>
          <span>
            <label for="photo">Foto</label>
            <input type="text" id="photo" formControlName="photo">
          </span>
          <button class="primary" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </article>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  cattleService = inject(CattleService);
  housingLocation: Cattle | undefined;
  


  constructor() {
    const cattleId = parseInt(this.route.snapshot.params['id'], 10);

    this.cattleService.getCattleById(cattleId)
      .then(cattle => {
        this.housingLocation = cattle;
      })
  }

  registerForm = new FormGroup({
    name: new FormControl(''),
    race: new FormControl(''),
    age: new FormControl(''),
    price: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    photo: new FormControl('')
  })

  submitApplication() {
    this.cattleService.sendPostRequest(
      {
        name: this.registerForm.value.name!,
        race: this.registerForm.value.race!,
        age: Number(this.registerForm.value.age)!,
        price: Number(this.registerForm.value.price!),
        city: this.registerForm.value.city!,
        state: this.registerForm.value.state!,
        photo: this.registerForm.value.photo!}
    )
    // console.log(this.registerForm.value.name);
    // console.log(this.registerForm.value.race);
    // console.log(this.registerForm.value.age);
    // console.log(this.registerForm.value.price);
    // console.log(this.registerForm.value.city);
    // console.log(this.registerForm.value.state);
    // console.log(this.registerForm.value.photo);
  }

}
