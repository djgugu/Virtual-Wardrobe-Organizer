import React from 'react';
import Item from './Item';

function Outfit({ items }) {
  return (
    <div className="outfit">
      {items.map((item) => (
        <div key={item.id} className="outfit-item">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default Outfit;
