import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-child',
  templateUrl: './news-child.component.html',
  styleUrls: ['./news-child.component.css']
})
export class NewsChildComponent implements OnInit {
  @Input()
  public n;

  @Output()
  public EventEmitter emitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitevent(){
    console.log("eventfromchild")
    this.emitter.emit();
  }
}
