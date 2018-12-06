import { Component } from '@angular/core';
import { firestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringifiedDocument = null;
  constructor() {}

  createDocument() {
    this.stringifiedDocument = 'To be continued';
  }
}
