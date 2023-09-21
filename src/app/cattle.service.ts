import { Injectable } from '@angular/core';
import { Cattle } from './cattle';

@Injectable({
  providedIn: 'root'
})
export class CattleService {

  readonly baseUrl = 'http://localhost:8080/cattle';

  constructor() { }

  async getAllCattle(): Promise<Cattle[]> {
    const data = await fetch(this.baseUrl);
    return data.json() ?? []
  }
  async getCattleById(id: number): Promise<Cattle | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return data.json() ?? {};
  }

  async sendPostRequest(data: any) {
    await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

}
