import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: String;
  @Input() content: String;
  @Input() date: Date;
  loveIts = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseLoveNumber() {
    this.loveIts++;
    console.log( this.loveIts + ' ' + this.title );
  }

  decreaseLoveNumber() {
    this.loveIts--;
    console.log(this.loveIts + ' ' + this.title );
  }
}
