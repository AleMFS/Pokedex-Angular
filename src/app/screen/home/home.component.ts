import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokedexService } from 'src/app/service/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemonSelected: string = '';
  PokemonData: any
  pokemonteste: any[] = []
  pokemon: any[] = [];
  typeSelected: any[] = [];

  page:number = 1;

  constructor(private dataService: PokedexService) {
  }



  receberString(stringGerada: string) {
    this.pokemonSelected = stringGerada;
    this.chamarAPI(stringGerada)
  }

  isModalOpen = false;

  onOpenOrCloseModal() {
    this.isModalOpen = !this.isModalOpen;
    console.log(this.pokemonSelected)
  }

  chamarAPI(string: string) {
    this.dataService.getMoreData(string).subscribe((response) => {
      this.PokemonData = response
      console.log(response)
    })
  }






  chooseElement(string: string) {
    if (this.pokemon) {
      this.typeSelected = this.pokemonteste.filter((pokemon: any) => {
        return pokemon.types.some((type: any) => type.type.name === string);
      })
      this.page = 1
      this.pokemon = this.typeSelected
    };
  }
  handleSearchPokemonPai(partialString: string) {
    if (this.pokemonteste) {
      this.typeSelected = this.pokemonteste.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().startsWith(partialString.toLowerCase());
      });
      this.page = 1
      this.pokemon = this.typeSelected;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  requisicaoAPI() {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        const requests = response.results.map((result: { name: string }) =>
          this.dataService.getMoreData(result.name)
        );

        forkJoin(requests).subscribe((responses: any) => {
          this.pokemon = responses;
          this.pokemonteste = responses

          console.log(this.pokemon);

        });
      });
  }



  ngOnInit() {
    this.requisicaoAPI()

  }


}
