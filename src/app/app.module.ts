import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';
import { HomeComponent } from './screen/home/home.component';
import { MetricsPokemonComponent } from './components/metrics-pokemon/metrics-pokemon.component';
import { ProgressBarComponent } from './components/modal-pokemon/progress-bar/progress-bar.component';
import { PokemonCardComponent } from './components/pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonFiltersComponent } from './components/pokemon-filters/pokemon-filters.component';
import { SearchPokemonComponent } from './components/pokemon-filters/search-pokemon/search-pokemon.component';

// register Swiper custom elements



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonTypeComponent,
    ModalPokemonComponent,
    HomeComponent,
    MetricsPokemonComponent,
    ProgressBarComponent,
    PokemonCardComponent,
    PokemonFiltersComponent,
    SearchPokemonComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,




  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
