import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private sharedData: any;
  

  constructor(private http: HttpClient) { }

  private pokedexAPI = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  getPokemons() {
    return this.http.get(`${this.pokedexAPI}`); // Substitua pela URL da sua API
  }

  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }


  
 

 
}

