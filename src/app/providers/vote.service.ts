import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }
  
  list(): Vote[] {
    return [
      {
        id: 1,
        colleague: {
          pseudo: 'John Doe',
          score: -999,
          photo: 'https://example.com/johndoe.jpg',
        },
        
        vote: LikeHate.LIKE,
        scoreAfterVote: -998,
      },
      {
        id: 2,
        colleague: {
          pseudo: 'Jane Smith',
          score: 800,
          photo: 'https://example.com/janesmith.jpg',
        },
        vote: LikeHate.HATE,
        scoreAfterVote: 799,
      },
      {
        id: 3,
        colleague: {
          pseudo: 'Bob Johnson',
          score: 1200,
          photo: 'https://example.com/bobjohnson.jpg',
        },
        vote: LikeHate.LIKE,
        scoreAfterVote: 1201,
      },
    ];
  }
}
