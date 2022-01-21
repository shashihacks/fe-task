import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  public form: any;
  ratingSubjects = [
    { name: 'cleanliness' },

  ]

  @Output() rating = new EventEmitter()
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({

      ratings: this.fb.group({
        cleanliness: [0],

      })
    });

    (this.form as FormGroup).valueChanges.subscribe(values => { this.rating.emit(values) })
  }

  onSubmit() {
    // console.log(this.form.value.ratings)
  }

}