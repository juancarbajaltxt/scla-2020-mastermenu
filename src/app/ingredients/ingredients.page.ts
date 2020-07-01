import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  ingredients = [
       {
      name: 'tacos',
      img: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/ground-beef-tacos-2.jpg',
      recipe: 'tomato' 
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
