import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-smacss',
  templateUrl: './smacss.component.html',
  styleUrls: ['./smacss.component.scss']
})
export class SmacssComponent implements OnInit {


  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
