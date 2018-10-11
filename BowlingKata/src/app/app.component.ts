import { Component, ViewChild } from '@angular/core';

import { BowlingInputService } from './bowling-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('#number')element: HTMLElement;
  title = 'app';
  constructor(private bowlingInputService: BowlingInputService) {

  }

  public NextThrow() {
    const number = +this.element.nodeValue;
    this.bowlingInputService.NextThrow(number);
  }
}
