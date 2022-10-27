import { action, makeObservable, observable } from 'mobx';
import { ListState } from './state/ListState';

export class AppState {
  public count = 0;
  public listState = new ListState();

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
