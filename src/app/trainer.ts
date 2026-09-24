import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Trainer {
  name: string = 'Ash';
  region: string = 'Kanto';
  badgeCount: number = 8;
}