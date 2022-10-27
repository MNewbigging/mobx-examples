import { action, makeObservable, observable } from 'mobx';
import { ColourClockState } from './state/ColourClockState';
import { ListState } from './state/ListState';

export class AppState {
  public count = 0;
  public listState = new ListState();
  public colourClockState = new ColourClockState();

  constructor() {
    makeObservable(this, {
      count: observable,
      incrementCount: action,
    });
  }

  public incrementCount = () => {
    this.count++;
  };
}
