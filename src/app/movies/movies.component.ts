import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  poupularMovies: any
  movie: any
  stars = 5
  searchRef: any
  filteredMovies: any
  constructor(private movieService: MoviesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.movieService.getPoupularMovies().subscribe(movies => {
      this.poupularMovies = movies
      // console.log(this.poupularMovies)

      this.filteredMovies = this.poupularMovies.results
    })


  }

  addToWatchList(movie: any) {
    this.movieService.addToWatchList(movie)
    console.log(movie)
  }

  getRating(e: any, movie: any) {
    console.log(e)

    let filterd = this.poupularMovies.results.filter((m: any) => m == movie)
    if (filterd.length > 0) {
      movie['rating'] = e
    }
    console.log(this.poupularMovies)
  }

  searchMovie() {
    console.log(this.poupularMovies)
    if (this.searchRef) {
      return this.filteredMovies = this.poupularMovies.results.filter((m: any) => m.original_title.toLowerCase().includes(this.searchRef.toLowerCase()))
    }

    this.filteredMovies = this.poupularMovies.results
    console.log(this.filteredMovies)
  }

}
