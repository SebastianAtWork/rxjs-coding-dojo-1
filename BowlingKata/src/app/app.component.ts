import { Component } from '@angular/core';

import { BowlingInputService } from './bowling-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private bowlingInputService: BowlingInputService) {

  }

  public NextThrow(pinCount: string) {
    this.bowlingInputService.NextThrow(+pinCount);
  }
}
