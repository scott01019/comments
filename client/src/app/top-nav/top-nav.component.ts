import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  numberOfComments : number
  loggedIn : boolean
  notifications : boolean
  forumName : string
  userName : string

  constructor() { }

  ngOnInit() {
    this.numberOfComments = 25
    this.forumName = "Blogspot"
    this.loggedIn = true
    this.notifications = false
    this.userName = "Scott Burnette"
  }

}
