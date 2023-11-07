import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Pokemon {
  name: string;
  types: Type[];
}
interface Type {
  name: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  @Output() stringGerada = new EventEmitter<string>();
  @Output() abrirFilho2 = new EventEmitter<void>();

  @Input() pokemon:any[]= [];

  sizeImg:number= 14.375;
  topImg:number= -10.5
  
  handleOpenModal() {
    this.abrirFilho2.emit();
  }

  gerarString(string:string) {
    
    this.stringGerada.emit(string);
    
  }
  


  teste:any[] = []
  pokemons: any[] = [];
  itemsPerPag = 60;
  
 
  


  maisItens() {
    this.itemsPerPag += 12
  }
 


  

}
