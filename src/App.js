import React, { useState } from 'react';
import './style.css';
import Wardrobe from './components/Wardrobe';
import Popup from './components/Popup';
import items from './data/items';
import MixOutfits from './components/MixOutfits';
import AddItem from './components/AddItem';

import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const [showAddItem, setShowAddItem] = React.useState(false);
  const [showMixOutfits, setShowMixOutfits] = React.useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };
  const [isAddingItem, setIsAddingItem] = useState(false);

  const handleAddItem = () => {
    setIsAddingItem(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Wardrobe Organizer</h1>
      </header>

      <Wardrobe items={items} onItemClick={handleItemClick} />

      <button onClick={() => setShowAddItem(!showAddItem)}>
        {showAddItem ? 'Cancel' : 'Add Item'}
      </button>
      {showAddItem && <AddItem />}
      <button onClick={() => setShowMixOutfits(!showMixOutfits)}>
        {showMixOutfits ? 'Cancel' : 'Mix Outfits'}
      </button>
      {showMixOutfits && <MixOutfits />}

      {/* {isAddingItem ? (
        <div className="popup">POP UP</div>
      ) : (
        <button onClick={handleAddItem}>Add Item</button>
      )}
      {selectedItem && (
        <Popup item={selectedItem} handleClose={handleClosePopup} />
      )} */}
    </div>
  );
}
