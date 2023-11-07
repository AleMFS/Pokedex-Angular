import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  @Input() pokemon: any;

  nameAbrev(string:string){
    if(string === 'special-attack'){
      return 'Sp.Atk'
    }else if(string === 'special-defense' ){
      return 'Sp.Def'
    }else{return string[0].toUpperCase() + string.slice(1)}
  }
}
