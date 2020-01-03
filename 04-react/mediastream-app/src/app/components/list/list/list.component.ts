import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public listDate = [];

  constructor() { }

  ngOnInit() {
    this.loadDates();
  }

  /**
   * loadDates
   */
  public loadDates() {
    this.listDate = [
      '2017-02-20T13:33:52.889Z', '2014-03-25T14:10:24.888Z',
      '2017-01-20T13:25:52.889Z', '2015-04-25T14:22:24.888Z',
      '2017-04-20T13:10:52.889Z', '2016-05-25T14:33:24.888Z',
      '2017-05-20T13:30:52.889Z', '2017-06-25T14:44:24.888Z',
    ];
  }

}
