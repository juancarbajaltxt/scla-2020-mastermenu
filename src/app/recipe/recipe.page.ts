import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes = [
    {
      name: 'Tacos',
      img: 'https://photos.bigoven.com/recipe/hero/tacos-11.jpg?h=500&w=500',
      recipe: 'tomato' 
    },
    {
      name: 'Burrito',
      img: 'https://photos.bigoven.com/recipe/hero/burrito-filling.jpg?h=500&w=500',
      recipe: 'beans'
    },
    {
      name: 'Burger',
      img: 'https://www.macheesmo.com/wp-content/uploads/2019/06/Summer-Burger-Mix.jpg',
      recipe: 'lettuce'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
