import { IRoll } from './IRoll';

export class Frame {
  Rolls: IRoll[];
  Sum: number;


  constructor() {
    // Frame subscribed sich bei seiner Erzeugung auf Rolls
  }

  // Methode: onRoll
  // sum aktuallisiern
  // isFrameFinished
  // if IsFrameFinished ?
  //     IsFrameSpare?
  //     IsFrameStrike?
  //     if (!Spare && !Strike) unsubscribe
  //     sonst, noch auf nächsten bzw. übernächsten Wurf warten
  //     UND
}
