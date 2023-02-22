import React, { useState, useEffect } from 'react';
import Item from './Item';

import { items } from '../data/items';

function Category({ category }) {
  const categoryItems = items.filter((item) => item.category === category);

  return (
    <div>
      <h2>{category}</h2>
      <div className="category-items">
        {categoryItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
