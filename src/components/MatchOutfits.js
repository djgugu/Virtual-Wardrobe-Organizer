import React from 'react';
import Outfit from './Outfit';

function MatchOutfits({ items }) {
  const outfits = [];

  // Loop through each item and find other items that match well with it
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    const matchingItems = items.filter(
      (item) =>
        item.id !== currentItem.id && item.category === currentItem.category
    );

    // Combine the current item with each matching item to create a new outfit
    for (let j = 0; j < matchingItems.length; j++) {
      const matchingItem = matchingItems[j];
      const outfit = [currentItem, matchingItem];

      outfits.push(outfit);
    }
  }

  return (
    <div className="match-outfits">
      <h2>Match Outfits</h2>
      <div className="outfits">
        {outfits.map((outfit) => (
          <div
            key={outfit[0].id + outfit[1].id + outfit[1].id}
            className="outfit-item"
          >
            <Outfit items={outfit} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchOutfits;
