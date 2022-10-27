import './list-item.scss';

import React from 'react';
import { IListItem } from '../../state/ListState';

interface ListItemProps {
  item: IListItem;
  altBackground: boolean;
  onRemoveItem: (id: string) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ item, altBackground, onRemoveItem }) => {
  const altBackgroundClass = altBackground ? 'alt-bg' : '';
  const classes = ['list-item', altBackgroundClass];

  return (
    <div className={classes.join(' ')}>
      <div>{item.id}</div>
      <div className='list-item-controls'>
        <button onClick={() => onRemoveItem(item.id)}>X</button>
      </div>
    </div>
  );
};
