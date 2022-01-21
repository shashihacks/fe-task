import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReviewComponent } from './review/review.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { SearchComponent } from './search/search.component'



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    WatchlistComponent,
    ReviewComponent,
    RatingComponent,
    SidepanelComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
