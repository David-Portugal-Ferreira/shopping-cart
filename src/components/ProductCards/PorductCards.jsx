import { useState } from "react";
import styles from "./ProductCards.module.css";

function ProductCards({ prod, addItemsToCart }) {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered(!hovered);
  }

  return (
    <div
      className={styles["product-wrapper"]}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={prod.image} alt="" style={{transform: hovered ? "scale(1.05)" : "scale(1)"}} />
      <div className={styles["product-card"]}>
        <p className={styles["product-card-title"]}>{prod.title}</p>
        <p>{prod.price} €</p>
        <div className={styles["add-to-cart-section"]}>
          <input
            type="number"
            min={0}
            value={numberOfItems}
            onChange={(e) => {
              setNumberOfItems(Number(e.target.value));
            }}
          />
          <button
            disabled={numberOfItems <= 0}
            onClick={() => {
              const item = {
                prod: prod,
                numberOfItems: numberOfItems,
              };
              addItemsToCart(item);
              setNumberOfItems(0);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
