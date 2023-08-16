import { Component } from '@angular/core';
import { Hero } from "../app/Hero";
import { HEROES } from "../app/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes = HEROES;
  protected readonly onselect = onselect;
}
