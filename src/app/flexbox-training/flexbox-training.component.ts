import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';


@Component({
  selector: 'app-flexbox-training',
  templateUrl: './flexbox-training.component.html',
  styleUrls: ['./flexbox-training.component.scss']
})
export class FlexboxTrainingComponent implements OnInit {
  selected: any;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  select(item): void {
    this.selected = (this.selected === item ? null : item);
  }
  isActive(item) {
    return this.selected === item;
  }
}
