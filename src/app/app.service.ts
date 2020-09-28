import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public roundProbability(probability: number): string {
    return `${Math.round(probability) * 100}%` ;
  }

}
