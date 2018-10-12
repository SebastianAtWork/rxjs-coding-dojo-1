import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Frame } from './Frame';
import { IRoll } from './IRoll';

@Injectable({
  providedIn: 'root'
})
export class BowlingInputService {
  public Rolls: Subject<IRoll>;
  public Frames: Subject<Frame>;
  constructor() {
    this.Rolls = new Subject<IRoll>();
    this.Frames = new Subject<Frame>();
    this.Frames.subscribe()
  }
  NextRoll(number: number): any {
    this.Rolls.next(<IRoll>{PinCount: number});
  }
  NextFrame(rolls: IRoll[], sum: number): any {
    this.Frames.next(<Frame>{Rolls: rolls, Sum: sum});
  }
// Todo: Frame behält eine Subscription auf die futurerolls
}
