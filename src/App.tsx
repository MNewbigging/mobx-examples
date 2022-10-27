import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { List } from './components/list/List';
import { Controls } from './components/controls/Controls';
import { OutputLog } from './components/output-log/OutputLog';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  appState.logger.print('App render');

  return (
    <div className='full-size center-content'>
      <div className='full-size one-row'>
        <div className='flex-40 border-right'>
          <List />
        </div>
        <div className='flex-60 list'>
          <div className='flex-40 border-bottom'>
            <Controls appState={appState} />
          </div>
          <div className='flex-60'>
            <OutputLog logger={appState.logger} />
          </div>
        </div>
      </div>
    </div>
  );
});
