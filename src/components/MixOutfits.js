import React from 'react';
import items from '../data/items';

const MixOutfits = () => {
  const [mixedOutfits, setMixedOutfits] = React.useState([]);

  const mixOutfits2 = () => {
    const mixedTops = items.tops[Math.floor(Math.random() * items.length)];
    const mixedBottoms =
      items.bottoms[Math.floor(Math.random() * items.length)];
    const mixedShoes = items.shoes[Math.floor(Math.random() * items.length)];
    const mixedAccessories =
      items.accessories[Math.floor(Math.random() * items.length)];

    setMixedOutfits([
      { category: 'Tops', item: mixedTops },
      { category: 'Bottoms', item: mixedBottoms },
      { category: 'Shoes', item: mixedShoes },
      { category: 'Accessories', item: mixedAccessories },
    ]);
  };

  return (
    <div className="mix-outfits">
      {/* <button onClick={mixOutfits2}>Mix Outfits</button> */}
      <div>
        <h3>Tops</h3>
        <img
          src="https://images.unsplash.com/photo-1615320876716-0fc796a5010f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
          alt="Kein Bild vorhanden"
        />
        <p>name</p>
      </div>
      <div>
        <h3>Bottoms</h3>
        <img
          src="https://images.unsplash.com/photo-1615320876716-0fc796a5010f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
          alt="Kein Bild vorhanden"
        />
        <p>name</p>
      </div>
      <div>
        <h3>Shoes</h3>
        <img
          src="https://images.unsplash.com/photo-1615320876716-0fc796a5010f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
          alt="Kein Bild vorhanden"
        />
        <p>name</p>
      </div>
      <div>
        <h3>Accessories</h3>
        <img
          src="https://images.unsplash.com/photo-1615320876716-0fc796a5010f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
          alt="Kein Bild vorhanden"
        />
        <p>name</p>
      </div>

      {/* {mixedOutfits.length > 0 && (
        <div className="mixed-outfits">
          {mixedOutfits.map((outfit) => (
            <div key={outfit.category}>
              <h3>{outfit.category}</h3>
              <img src={outfit.item.imageUrl} alt={outfit.item.name} />
              <p>{outfit.item.name}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default MixOutfits;
