import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  Recipe: Recipe[] = [
    new Recipe('Test Recipe', 'This for sample test', 'https://live.staticflickr.com/5737/30622968353_35e06fcb52_b.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
