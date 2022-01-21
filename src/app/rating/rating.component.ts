import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sk-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input('stars') stars: any
  starArray: any
  @Input('color') color: any
  @Input('rating') rating: any
  @Output() getRating = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
    this.starArray = [...Array(this.stars).keys()]
    console.log("rating loaded", this.rating)
  }

  rate(number: any) {
    this.rating = number
    this.getRating.emit(number)
  }
  onMouseEnter(number: any) {
    this.rating = number

  }

}
