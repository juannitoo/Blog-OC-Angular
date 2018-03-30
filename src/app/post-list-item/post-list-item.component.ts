import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() loveIts: number;

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
