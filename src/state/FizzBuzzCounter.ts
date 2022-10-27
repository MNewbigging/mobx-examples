import { action, makeAutoObservable, observable } from 'mobx';

export class FizzBuzzCounter {
  @observable public count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action incrementCount = () => {
    this.count++;
  };
}
