import { action, computed, makeAutoObservable, makeObservable, observable, reaction } from 'mobx';

export class FizzBuzzCounter {
  public count = 0;
  public fizzBuzzString = 'buzz';

  constructor() {
    makeObservable(this, {
      count: observable,
      fizzBuzzString: observable,
      incrementCount: action,
      isFizz: computed,
    });

    reaction(() => this.count, this.setFizzBuzzString);
  }

  incrementCount = () => {
    this.count++;
  };

  // Computed cahces its return value and only reruns when a referenced observable changes
  get isFizz() {
    //console.log('isFizz');
    return this.fizzBuzzString === 'fizz';
  }

  // Reaction re-runs on a specific field - count
  setFizzBuzzString = () => {
    this.fizzBuzzString = this.count % 5 === 0 ? 'fizz' : 'buzz';
  };
}
