import './fizz-counter.scss';

import React from 'react';
import { AppState } from '../../AppState';
import { Observer, observer } from 'mobx-react-lite';
import { FizzBuzzCounter } from '../../state/FizzBuzzCounter';

interface FizzCounterProps {
  fizzBuzzCounter: FizzBuzzCounter;
}

export const FizzCounter: React.FC<FizzCounterProps> = observer(({ fizzBuzzCounter }) => {
  console.log('FizzCounter render');

  return (
    <div className='full-size center-content gap15 list'>
      {/* <Observer>
        {() => <button onClick={appState.incrementCount}>Count: {appState.count}</button>}
      </Observer> */}

      <button onClick={fizzBuzzCounter.incrementCount}>Count: {fizzBuzzCounter.count}</button>

      {/* <div>{fizzBuzzCounter.fizzBuzzString}</div>
      <div>isFizz {fizzBuzzCounter.isFizz.toString()}</div> */}
    </div>
  );
});
