import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_MOVIES = 'https://cz2byepbc5.execute-api.us-east-2.amazonaws.com/default/movieszri';
  constructor(private http: HttpClient) { }

  getMatchingMovie(genres: string): any {
    return this.http.post(this.API_MOVIES, {genres});
  }
}
