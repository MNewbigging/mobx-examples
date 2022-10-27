import './output-log.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Logger } from '../../state/Logger';
import { OutputLogItem } from '../output-log-item/OutputLogItem';

interface OutputLogProps {
  logger: Logger;
}

export const OutputLog: React.FC<OutputLogProps> = observer(({ logger }) => {
  logger.print('OutputLog render');

  return (
    <div className='full-size list pad15'>
      {logger.logs.map((log, index) => (
        <OutputLogItem log={log} altBackground={index % 2 === 0} />
      ))}
    </div>
  );
});
