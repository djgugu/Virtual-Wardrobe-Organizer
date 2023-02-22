import React from 'react';

const Item = ({ item, handleClick }) => {
  return (
    <div className="item" onClick={() => handleClick(item)}>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default Item;
