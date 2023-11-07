import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metrics-pokemon',
  templateUrl: './metrics-pokemon.component.html',
  styleUrls: ['./metrics-pokemon.component.css']
})
export class MetricsPokemonComponent {

  @Input() pokemon:any
}
