import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent {

  @Input()
  type:string = '';
  

  firstToUpperCase(string:string){    
    return string.charAt(0).toUpperCase() + string.slice(1)    
  }
}
