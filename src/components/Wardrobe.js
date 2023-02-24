import React, { useState } from 'react';
import Item from './Item';
import Popup from './Popup';
import { items } from '../data/items';
import Category from './Category';

import Category from './Category';
import MatchOutfits from './MatchOutfits';

const Wardrobe = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const categories = [...new Set(items.map((item) => item.category))];

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="wardrobe">
      <h1>My Wardrobe</h1>

      {/* <div className="categories">
        <Category category="Tops" />
        <Category category="Bottoms" />
        <Category category="Shoes" />
      </div>

      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div> */}

      <MatchOutfits items={items} />
      {categories.map((category) => (
        <Category key={category} category={category} items={items} />
      ))}

      {selectedItem && <Popup item={selectedItem} handleClose={handleClose} />}
    </div>
  );
};

export default Wardrobe;
