import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BowlingInputService } from './bowling-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'app';
  _subscription: Subscription;
  constructor(private bowlingInputService: BowlingInputService) {

    this._subscription = this.bowlingInputService.Throws.subscribe(pinCount => this.onThrow(pinCount));
  }

  public NextThrow(pinCount: string) {
    this.bowlingInputService.NextThrow(+pinCount);
  }

  public onThrow(pinCount: number) {
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
