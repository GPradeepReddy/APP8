import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  DoCheck {
  title = 'App8';
  firstName: string = null;
  secondName: string = null;
  isDisabled: boolean = true;

  ngDoCheck() {
    if (this.firstName && this.secondName) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

}
