import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { List } from './components/list/List';
import { FizzCounter } from './components/controls/FizzCounter';
import { ColourClock } from './components/colour-clock/ColourClock';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  console.log('App render');

  return (
    <div className='full-size center-content'>
      <div className='full-size one-row'>
        <div className='list-wrapper border-right'>
          <List listState={appState.listState} />
        </div>
        <div className='flex-fill list'>
          <div className='flex-fill border-bottom'>
            <FizzCounter fizzBuzzCounter={appState.fizzBuzzCounter} />
          </div>
          <div className='flex-fill'>
            <ColourClock colourClockState={appState.colourClockState} />
          </div>
        </div>
      </div>
    </div>
  );
});
