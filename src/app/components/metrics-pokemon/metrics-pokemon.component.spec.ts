import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsPokemonComponent } from './metrics-pokemon.component';

describe('MetricsPokemonComponent', () => {
  let component: MetricsPokemonComponent;
  let fixture: ComponentFixture<MetricsPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricsPokemonComponent]
    });
    fixture = TestBed.createComponent(MetricsPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
