import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import * as env from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  watchList: any = []
  API_KEY: string = env.environment.API_KEY;
  URL = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`

  constructor(private http: HttpClient) {

  }

  getPoupularMovies() {
    let moviesSubject = new Subject<Object>();
    this.http.get<any>(this.URL).subscribe(response => {
      moviesSubject.next(response)
    })

    return moviesSubject.asObservable()

  }

  addToWatchList(movie: any) {
    this.watchList.push(movie)
  }

  // getGenres(ids)
}
