import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})

export class SuggestionComponent implements OnInit {
  public media:any = {}
  constructor() {
    this.media.title = "Foo Fighters";
    this.media.subtitle = "The Color and The Shape";
    this.media.paragraph = `Foo Fighters is an American rock band, formed in
    Seattle, Washington in 1994. It was founded by Nirvana drummer Dave Grohl as
    a one-man project following the death of Kurt Cobain and the resulting
    dissolution of his previous band.`;
  }

  ngOnInit() {
  }

}
