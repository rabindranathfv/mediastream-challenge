import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() date: any;
  @Input() userId: any;

  constructor() { }

  ngOnInit() {
    console.log(this.date);
    console.log(this.userId);
  }

}
