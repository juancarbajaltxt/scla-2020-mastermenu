import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.page.html',
  styleUrls: ['./stepone.page.scss'],
})
export class SteponePage implements OnInit {
  
  stepone = [
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
