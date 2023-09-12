import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http: HttpClient) { }
  list(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues');

}

getColleagues(): Observable<Colleague[]> {
  console.log(this.getColleagues)

  return this.http.get<Colleague[]>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues");
}

getColleagueByPseudo(pseudo:string){
  return this.http.get<Colleague | null>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/'+pseudo);
}

postColleague(colleague:Colleague, last:string, first:string){
  const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  this.http.post<Colleague>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues',
        {
          pseudo: colleague.pseudo,
          last: last,
          first: first,
          photo: colleague.photo,
          score: colleague.score
        },
        httpOptions
      )
      .subscribe(newColleague => {
      })
}
}
