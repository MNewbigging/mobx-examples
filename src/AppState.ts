import { action, makeObservable, observable } from 'mobx';
import { Logger } from './state/Logger';

export class AppState {
  public count = 0;
  public logger = new Logger();

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
