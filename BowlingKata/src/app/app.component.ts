import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BowlingInputService } from './bowling-input.service';
import { Frame } from './Frame';
import { IRoll } from './IRoll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'app';
  _subscription1: Subscription;
  _subscription2: Subscription;
  _rolls: Array<IRoll>;
  _frames: Array<Frame>;
  constructor(private bowlingInputService: BowlingInputService) {
    this._rolls = new Array<IRoll>();
    this._frames = new Array<Frame>();
    this._subscription1 = this.bowlingInputService.Rolls.subscribe(pinCount => this.onRoll(pinCount));
    this._subscription2 = this.bowlingInputService.Frames.subscribe(frame => this.onFrame(frame));
  }

  public NextThrow(pinCount: string) {
    this.bowlingInputService.NextRoll(+pinCount);
  }

  public onRoll(roll: IRoll) {
    this._rolls.push(roll);
    if (this.IsFrameOver(this._rolls)) {
      this.bowlingInputService
      .NextFrame(this._rolls, this._rolls.map(a => a.PinCount).reduce((a, b) => a + b));
    }
  }

  public onFrame(frame: Frame) {
    this._frames.push(frame);
  }
  ngOnDestroy(): void {
    this._subscription1.unsubscribe();
    this._subscription2.unsubscribe();
  }

  public IsFrameOver(rolls: IRoll[]) {
    const lastRoll = rolls[rolls.length - 1];
    return (lastRoll.PinCount === 10 || rolls.length === 2);
  }

  public FrameToString(frame: Frame) {
    let representation = '(';
    frame.Rolls.forEach(roll => {
      representation += roll.PinCount + ',';
    });
    representation += ') Rundensumme: ' + frame.Sum;
    return representation;
  }
}
