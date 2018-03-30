import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
    title: 'Premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
              ' et dolore magna aliqua. Ut enim ad minim veniam, quis',
    created_at: new Date,
    loveIts: 0
    },
    {
    title: 'Second post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
              ' et dolore magna aliqua. Ut enim ad minim veniam, quis',
    created_at: new Date,
    loveIts: 0
    },
    {
    title: 'Troisième post',
    content: 'Personne n\'aime la douleur en elle-même, ne la recherche et ne la souhaite, ' +
              'tout simplement parce qu\'il s\'agit de la douleur ...',
    created_at: new Date,
    loveIts: 0
    }
  ];

}

