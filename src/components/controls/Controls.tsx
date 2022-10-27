import './controls.scss';

import React from 'react';
import { AppState } from '../../AppState';
import { observer } from 'mobx-react-lite';

interface ControlsProps {
  appState: AppState;
}

export const Controls: React.FC<ControlsProps> = observer(({ appState }) => {
  return (
    <div className='full-size center-content'>
      <button onClick={appState.incrementCount}>Count: {appState.count}</button>
    </div>
  );
});
