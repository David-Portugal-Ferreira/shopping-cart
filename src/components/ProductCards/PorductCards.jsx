import { useState } from "react";

function ProductCards({ prod, addItemsToCart }) {
  const [numberOfItems, setNumberOfItems] = useState(0);
  return (
    <div className="products-card">
      <img src={prod.image} alt="" />
      <p>{prod.title}</p>
      <p>{prod.price}</p>
      <input
        type="number"
        min={0}
        value={numberOfItems}
        onChange={(e) => {
          setNumberOfItems(Number(e.target.value));
        }}
      />
      <button 
      disabled={numberOfItems<=0}
      onClick={() => {
        addItemsToCart(prod, numberOfItems);
        setNumberOfItems(0);
        }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCards;
