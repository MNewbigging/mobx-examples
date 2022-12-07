import './list.scss';

import React from 'react';
import { ListState } from '../../state/ListState';
import { observer } from 'mobx-react-lite';
import { ListItem } from '../list-item/ListItem';

interface ListProps {
  listState: ListState;
}

// This comp will re-render if any observable state it references is changed
export const List: React.FC<ListProps> = observer(({ listState }) => {
  console.log('List render');

  return (
    <div className='full-size list pad15 gap15'>
      <div className='list-banner'>
        <div>Showing {listState.items.length} items</div>
        <button onClick={listState.addListItem}>Add list item</button>
      </div>

      {listState.items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          altBackground={index % 2 === 0}
          onRemoveItem={listState.removeListItem}
          onRefreshItem={listState.newItemId}
        />
      ))}
    </div>
  );
});
