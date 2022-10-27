import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
  reaction,
  when,
} from 'mobx';

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

    //autorun(this.onAnyChange);
    reaction(() => this.count, this.setFizzBuzzString);

    // When the first argument returns true, the second argument is called - once only
    // when(
    //   () => this.fizzBuzzString === 'fizz',
    //   () => console.log('when fizz!')
    // );
  }

  incrementCount = () => {
    this.count++;
  };

  // Computed cahces its return value and only reruns when a referenced observable changes
  get isFizz() {
    //console.log('isFizz');
    return this.fizzBuzzString === 'fizz';
  }

  // Reaction runs whenever a specific observable field changes
  setFizzBuzzString = () => {
    this.fizzBuzzString = this.count % 5 === 0 ? 'fizz' : 'buzz';
  };

  // Autorun runs whenever any referenced observable changes
  onAnyChange = () => {
    const someString = this.count + this.fizzBuzzString;
    console.log('autorun');
  };
}
