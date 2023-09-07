import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague'; 


@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }
  list(): Colleague[] {
    return [
      {
        pseudo: 'John Doe',
        score: -999,
        photo: 'https://example.com/johndoe.jpg',
      },
      {
        pseudo: 'Jane Smith',
        score: 800,
        photo: 'https://example.com/janesmith.jpg',
      },
      {
        pseudo: 'Bob Johnson',
        score: 1200,
        photo: 'https://example.com/bobjohnson.jpg',
      },
    ];
  }
}
