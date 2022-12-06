import './list-item.scss';

import React from 'react';
import { IListItem } from '../../state/ListState';
import { observer } from 'mobx-react-lite';

interface ListItemProps {
  item: IListItem;
  altBackground: boolean;
  onRemoveItem: (id: string) => void;
  onRefreshItem: (id: string) => void;
}

export const ListItem: React.FC<ListItemProps> = observer(
  ({ item, altBackground, onRemoveItem, onRefreshItem }) => {
    console.log('ListItem render');

    const altBackgroundClass = altBackground ? 'alt-bg' : '';
    const classes = ['list-item', altBackgroundClass];

    return (
      <div className={classes.join(' ')}>
        <div>{item.id}</div>
        <div className='list-item-controls'>
          <button onClick={() => onRefreshItem(item.id)}>↺</button>
          <button onClick={() => onRemoveItem(item.id)}>X</button>
        </div>
      </div>
    );
  }
);
