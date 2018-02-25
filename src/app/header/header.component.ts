import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MenuOptions;
  constructor() { }

  ngOnInit() {
    this.MenuOptions = [ {option: 'New Wordsearch'}, {option: 'Options'}];
  }

}
