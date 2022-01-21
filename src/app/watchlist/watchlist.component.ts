import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchList: any
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.watchList = this.movieService.watchList
  }

}
