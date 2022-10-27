import './colour-clock.scss';

import { observer } from 'mobx-react-lite';
import React from 'react';
import { ColourClockState } from '../../state/ColourClockState';

interface ColourClockProps {
  colourClockState: ColourClockState;
}

export const ColourClock: React.FC<ColourClockProps> = observer(({ colourClockState }) => {
  return (
    <div
      className='colour-clock full-size center-content'
      style={{ backgroundColor: `${colourClockState.time}` }}
    >
      {colourClockState.time}
    </div>
  );
});
