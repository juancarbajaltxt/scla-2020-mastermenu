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
      name: 'Oatmeal Pancake',
      img: 'https://photos.bigoven.com/recipe/hero/bs-oatmeal-buttermilk-pancakes-1e7a7f.jpg?h=500&w=500',
      recipe: 'oatmeal pancake'
    },
    {
      name: 'Oatmeal',
      img: 'https://www.eatwell101.com/wp-content/uploads/2019/12/Healthy-Chocolate-Peanut-Butter-Oatmeal-Breakfast-recipe.jpg',
      recipe: 'oatmeal'
    },
    {
      name: 'Scrambled Eggs with Avocado',
      img: 'https://cleanfoodcrush.com/wp-content/uploads/2019/03/Strawberry-Avocado-Toast-Step-3.jpg',
      recipe: 'scrambled eggs'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
