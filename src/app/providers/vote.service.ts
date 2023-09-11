import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { LikeHate } from '../models/like-hate';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colleague } from '../models/colleague';



@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { 
    
  }
  private apiUrl = 'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes';
  private voteSubject = new Subject<LikeHate>();
  private votes: Vote[] = [];
  private action = new Subject<Vote>();

  sendVote(vote: Vote) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    

    this.http.post<Vote>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes',
      {
        pseudo: vote.colleague.pseudo,
        like_hate: vote.vote.toString()
      },
      httpOptions
    )
    .subscribe(newVote => {
      this.votes.unshift(newVote);
      this.action.next(newVote);
    })
  }

  getVoteObservable(): Observable<LikeHate> {
    
    return this.voteSubject.asObservable();
  }

  get actionObs(){
    return this.action.asObservable();
  }

  getVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.apiUrl);
  }
}