import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    myNews = ['aa', 'nn', 'cc', 'dsfd'];
    myNews2 = [{id: 1 , name: 'aa' }, {id: 2, name: 'bb'} ];
  constructor() { }

  ngOnInit() {
  }
  logme(event) {
    console.log(event);
  }
}
