import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  handleSearch(value: string) {
    this.search.emit(value);
    console.log(value)
  }

}
