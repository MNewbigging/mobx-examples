import './output-log-item.scss';

import React from 'react';
import { Log } from '../../state/Logger';

interface OutputLogItemProps {
  log: Log;
  altBackground: boolean;
}

export const OutputLogItem: React.FC<OutputLogItemProps> = ({ log, altBackground }) => {
  const altBackgroundClass = altBackground ? 'alt-bg' : '';
  const classes = ['log-item', altBackgroundClass];

  return <div className={classes.join(' ')}>{log.message}</div>;
};
