import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books = [
              {
                name:'Angular 2',
                description: 'Description goes here',
                copies: 4,
                category: 'Technical'
              },
              {
                name: 'Angular 4',
                  description: 'Description goes here',
                copies: 9,
                category: 'Technical'
              },
              {
                name: 'Aurelia',
                  description: 'Description goes here',
                copies: 9,
                category: 'Technical'
              },
              {
                name: 'React',
                description: 'Description goes here',
                copies: 9,
                category: 'Technical'
              },
              {
                name: 'Prison Break',
                description: 'Description goes here',
                copies: 5,
                category: 'Educational'
              }

          ];



}
