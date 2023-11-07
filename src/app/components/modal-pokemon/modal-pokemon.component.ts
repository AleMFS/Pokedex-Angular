import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css']
})
export class ModalPokemonComponent {
  name: any = '';
  sizeImg:number= 21.375;
  topImg:number= -11.5

  @Input() dados: string = '';
  @Input() pokemonData: any = ''


  @Output() closeModal = new EventEmitter<void>();

  handlecloseModal() {
    this.closeModal.emit();
    this.pokemonData = ''
    this.dados = ''

  }


}
