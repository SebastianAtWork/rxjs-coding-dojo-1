import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BowlingInputService {
  public Throws: Subject<number>;
  constructor() {
    this.Throws = new Subject<number>();
  }
  NextThrow(number: number): any {
    this.Throws.next(number);
  }

}
