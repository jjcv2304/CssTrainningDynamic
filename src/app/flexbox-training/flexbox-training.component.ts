import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox-training',
  templateUrl: './flexbox-training.component.html',
  styleUrls: ['./flexbox-training.component.scss']
})
export class FlexboxTrainingComponent implements OnInit {
  selected: any;

  constructor() { }

  ngOnInit() {
  }

  select(item): void {
    this.selected = (this.selected === item ? null : item);
  }
  isActive(item) {
    return this.selected === item;
  }
}
