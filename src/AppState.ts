import { action, makeObservable, observable } from 'mobx';
import { ColourClockState } from './state/ColourClockState';
import { FizzBuzzCounter } from './state/FizzBuzzCounter';
import { ListState } from './state/ListState';

export class AppState {
  public fizzBuzzCounter = new FizzBuzzCounter();
  public listState = new ListState();
  public colourClockState = new ColourClockState();
}
