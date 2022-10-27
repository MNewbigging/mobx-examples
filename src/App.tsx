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
  console.log('App render');

  return (
    <div className='full-size center-content'>
      <div className='full-size one-row split-40-60'>
        <div className='border-right'>
          <List />
        </div>
        <div className='list split-40-60'>
          <div className='border-bottom'>
            <Controls />
          </div>
          <div>
            <OutputLog />
          </div>
        </div>
      </div>
    </div>
  );
});
