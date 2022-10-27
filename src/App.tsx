import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { List } from './components/list/List';
import { Controls } from './components/controls/Controls';

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
          <div className='flex-40 border-bottom'>
            <Controls appState={appState} />
          </div>
          <div className='flex-60'></div>
        </div>
      </div>
    </div>
  );
});
