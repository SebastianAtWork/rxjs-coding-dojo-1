import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BowlingInputService } from './bowling-input.service';
import { IRoll } from './IRoll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'app';
  _subscription: Subscription;
  _rolls: Array<IRoll>;
  constructor(private bowlingInputService: BowlingInputService) {
    this._rolls = new Array<IRoll>();
    this._subscription = this.bowlingInputService.Throws.subscribe(pinCount => this.onThrow(pinCount));
  }

  public NextThrow(pinCount: string) {
    this.bowlingInputService.NextThrow(+pinCount);
  }

  public onThrow(pinCount: number) {
    this._rolls.push(<IRoll>{PinCount: pinCount});


  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
