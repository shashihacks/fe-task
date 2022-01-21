import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  rating3
  // public form: FormGroup
  constructor() {
    this.rating3 = 0;
    // this.form = this.fb.group({
    //   rating1: ['', Validators.required],
    //   rating2: [4]
    // });
  }
}
