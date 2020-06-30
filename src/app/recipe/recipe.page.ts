import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes = [
    {
      name: 'tacos',
      img: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/ground-beef-tacos-2.jpg',
      recipe: 'tomato' 
    },
    {
      name: 'burrito',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-wEudY-r2pLY2i3NpJ_eY6_aeqrXGlLQYuA&usqp=CAU',
      recipe: 'beans'
    },
    {
      name: 'burger',
      img: 'https://www.macheesmo.com/wp-content/uploads/2019/06/Summer-Burger-Mix.jpg',
      recipe: 'lettuce'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
