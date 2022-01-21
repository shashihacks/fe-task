import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import * as env from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnInit {

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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('watchList')) {
      // this.watchList = JSON.parse(localStorage.getItem('watchList'))

      console.log(this.watchList)
    }
  }

  addToWatchList(movie: any) {
    this.watchList.push(movie)
    localStorage.setItem('watchList', JSON.stringify(this.watchList))

  }

  // getGenres(ids)
}
