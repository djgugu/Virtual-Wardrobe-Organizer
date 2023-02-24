import React, { useState } from 'react';

function AddItem(props) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name === '' || category === '') {
      alert('Please enter a name and category for the item.');
      return;
    }
    props.onAddItem(name, category);
    setName('');
    setCategory('');
  }

  return (
    <form className="add-item-form">
      <h2>Add Item</h2>
      <label htmlFor="name-input">Name:</label>
      <input
        type="text"
        id="name-input"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter item name"
      />
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">Select category</option>
        <option value="Shirts">Shirts</option>
        <option value="Pants">Pants</option>
        <option value="Dresses">Dresses</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
      </select>
      <button type="submit" onClick={handleSubmit}>
        Add Item
      </button>
    </form>
  );
}

export default AddItem;
