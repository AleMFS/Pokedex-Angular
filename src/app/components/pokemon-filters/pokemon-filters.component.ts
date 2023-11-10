import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

const animation = { duration: 50000, easing: (t: any) => t }

@Component({
  selector: 'app-pokemon-filters',
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.css','./responsive.css',
    "../../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class PokemonFiltersComponent {
  @Output() filtrarPokemons = new EventEmitter<string>();  
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();

  

  handleSearch(value: string) {
    this.searchInput.emit(value);
    console.log(`filho: ${value}`)
  }

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;

  slider: any;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: "free-snap",
      rtl: false,
      slides: { origin: "auto", perView: "auto", spacing: 5 },
      /*created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },*/
    })
  }


  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }



  elementTypes: string[] = [
    'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire',
    'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
    'psychic', 'rock', 'steel', 'water'
  ]
  filtrar(string: string) {
    this.filtrarPokemons.emit(string)
    console.log(string)
  }





  firstToUpperCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }




}
