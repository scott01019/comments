import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-top-bar',
  templateUrl: './comments-top-bar.component.html',
  styleUrls: ['./comments-top-bar.component.css']
})
export class CommentsTopBarComponent implements OnInit {

  favorited : boolean
  favorites : number
  selected : string

  constructor() { }

  ngOnInit() {
    this.favorited = true
    this.favorites = 52
    this.selected = "Best"
  }

}
