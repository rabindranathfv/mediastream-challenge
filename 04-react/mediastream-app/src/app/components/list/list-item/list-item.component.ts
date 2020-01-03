import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() date: any;
  @Input() userId: any;
  showInfo: boolean;

  constructor() {
    this.showInfo = false;
   }

  ngOnInit() {
  }

  /**
   * showAlert
   */
  public showAlert(id) {
    this.showInfo = !this.showInfo;
    setTimeout(() => {
      this.showInfo = !this.showInfo;
    }, 2000);
  }

}
