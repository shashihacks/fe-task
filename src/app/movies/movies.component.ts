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


  //   {
  //     "adult": false,
  //     "backdrop_path": "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
  //     "genre_ids": [
  //         28,
  //         12,
  //         14,
  //         878
  //     ],
  //     "id": 524434,
  //     "original_language": "en",
  //     "original_title": "Eternals",
  //     "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
  //     "popularity": 11424.242,
  //     "poster_path": "/b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
  //     "release_date": "2021-11-03",
  //     "title": "Eternals",
  //     "video": false,
  //     "vote_average": 7.3,
  //     "vote_count": 3139
  // }

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
