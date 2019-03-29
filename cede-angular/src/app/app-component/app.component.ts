import { Component } from '@angular/core';
import { NgClass } from '../../../node_modules/@angular/common';
import { User } from './app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cede-angular';

  data: boolean[];

  a: string | null = 'HELLO WORLD';
  d: User;
  constructor() {
    let msg = this.a.substr(0, 5);
    this.d = { Name: "Víctor Martínez", Age: 29, Phone: "4986913", Email: "vijumaba89@gmail.com" };
  }
  click() {
    this.showAlert("Hola");
  }
  showAlert(a: string | null, b: boolean = true) {

  }
}
