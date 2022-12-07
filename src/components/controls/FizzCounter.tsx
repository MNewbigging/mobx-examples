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
      {/* This prevents the whole comp from re-rendering when count is changed */}
      {/* <Observer>
        {() => (
          <button onClick={fizzBuzzCounter.incrementCount}>Count: {fizzBuzzCounter.count}</button>
        )}
      </Observer> */}

      <button onClick={fizzBuzzCounter.incrementCount}>Count: {fizzBuzzCounter.count}</button>

      {/* <div>{fizzBuzzCounter.fizzBuzzString}</div> */}
      <div>isFizz: {fizzBuzzCounter.isFizz.toString()}</div>
    </div>
  );
});
