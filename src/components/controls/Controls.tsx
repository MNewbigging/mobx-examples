import './controls.scss';

import React from 'react';
import { AppState } from '../../AppState';
import { Observer, observer } from 'mobx-react-lite';

interface ControlsProps {
  appState: AppState;
}

export const Controls: React.FC<ControlsProps> = observer(({ appState }) => {
  console.log('Controls render');

  return (
    <div className='full-size center-content gap15'>
      {/* <Observer>
        {() => <button onClick={appState.incrementCount}>Count: {appState.count}</button>}
      </Observer> */}

      <button onClick={appState.incrementCount}>Count: {appState.count}</button>

      <button onClick={appState.listState.addListItem}>Add list item</button>
    </div>
  );
});
