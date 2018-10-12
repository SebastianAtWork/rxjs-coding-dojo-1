import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IFrame } from './IFrame';
import { IRoll } from './IRoll';

@Injectable({
  providedIn: 'root'
})
export class BowlingInputService {
  public Rolls: Subject<IRoll>;
  public Frames: Subject<IFrame>;
  constructor() {
    this.Rolls = new Subject<IRoll>();
    this.Frames = new Subject<IFrame>();
  }
  NextRoll(number: number): any {
    this.Rolls.next(<IRoll>{PinCount: number});
  }
  NextFrame(rolls: IRoll[], sum: number): any {
    this.Frames.next(<IFrame>{Rolls: rolls, Sum: sum});
  }

}
