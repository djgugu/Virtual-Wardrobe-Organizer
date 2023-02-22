import React, { useState } from 'react';
import './style.css';
import Wardrobe from './components/Wardrobe';
import Popup from './components/Popup';
import items from './data/items';

import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
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
      {isAddingItem ? (
        <div className="popup">{/* Popup content goes here */}</div>
      ) : (
        <button onClick={handleAddItem}>Add Item</button>
      )}
      {selectedItem && (
        <Popup item={selectedItem} handleClose={handleClosePopup} />
      )}
    </div>
  );
}
