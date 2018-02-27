import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  template: `

  <section class="ajr-container-grey">

    <article class="ajr-item">
        <section class="ajr-container-column">

            <article class="ajr-item black">
              Copy/paste Word Search Here:
            </article>

            <article class="ajr-item-100">
                <section class="ajr-container grey">
                    <article class="ajr-item-90-550px">
                        <textarea #textAreaWordSearch name="Text1" class="ajr-center-input" (keyup.enter)="findWord(textAreaWordSearch.value)"></textarea>
                    </article>

                    <article class="ajr-item-10">
                        <section class="ajr-container-column">
                            <article class="ajr-item-100">
                                <input #wordToFind
                                (keyup.enter)="findWord(wordToFind.value)">

                                <button 
                                (click)="findWord(textAreaWordSearch.value)"
                                >Find</button>
                            </article>
                        </section>
                    </article>
                </section>
            </article>
        </section>
    </article>

    <article class="ajr-item">
      <section class="ajr-container-column">
        <article class="ajr-item black">
          Results:
        </article>

        <article style="font-size:86px;" class="ajr-item-100">
            <section class="ajr-container-column" [intterHtml]="solution">
                
            </section>
        </article>
      </section>
    </article>
  </section>
  `
})
export class BodyComponent implements OnInit {
  solution = '';
  constructor() { }

  ngOnInit() {
  }

  findWord(wordToFind){
      this.solution = '<div class="black">it works</div>';
  }

}

class Letter {
    private letter = '';
    private x = '';
    private y = '';
    private partOfWord = false;

    constructor(l, _x, _y, _partOfWord){
        this.letter = l;
        this.x = _x;
        this.y = _y;
        this.partOfWord = _partOfWord;
    }

    getObject(){
        return this;
    }


}
