import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input() pokemon:any
  @Input() classe:string = ''
  

  firstToUpperCase(string: string) {
    if (string && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string; // Retorna a string original se for vazia, null ou undefined
    }
  }

  formatPokemonId(id: number) {
    if (id < 10) {
      return "00" + id
    } else if (id < 100) {
      return "0" + id
    } else {
      return id
    }
  }
}
