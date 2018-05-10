import { Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Css trainning';
  isEnableBorders: boolean;
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer) {
    this.isEnableBorders = false;
    this.cssUrl = '/assets/disableBorders.css';
  }

  toogleGlobalBorder() {
    this.isEnableBorders = !this.isEnableBorders;
    if (this.isEnableBorders) {
      this.cssUrl = '/assets/enableBorders.css';
    } else {
      this.cssUrl = '/assets/disableBorders.css';
    }

  }

}

