import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  template: `
  <article class="ajr-item-100">
    <button (click)="findWord()">Find Word</button>
    {{word}}
  </article>
  `
})
export class ButtonsComponent implements OnInit {
  word = '';

  constructor() { }

  ngOnInit() {
  }

  // button click for solve
  findWord() {
    this.word = 'testword';
  }

}
