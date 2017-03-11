import { Component } from '@angular/core';
import { SuggestionComponent } from './suggestion/suggestion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText:string = '';
  suggestions:any = [];

  constructor(){
    this.suggestions = [];
    for (var i=0; i<5; i++){
      this.suggestions.push(i);
    }
  }
}
