import { useLocation } from "react-router";
import Header from "../Header/Header";
import styles from "./Cart.module.css";

function calculateTotalPrice(items) {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.numberOfItems * item.prod.price;
  });
  return totalPrice;
}

function Cart() {
  const location = useLocation();
  const items = location.state.cart;
  let totalPrice = calculateTotalPrice(items);

  const displayItemsInCart = items.map((item) => {
    return (
      <div key={item.prod.id} className={styles["product-info"]}>
        {item.prod.title} - {item.numberOfItems} - Total Price:{" "}
        {item.numberOfItems * item.prod.price}€
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className={styles["products-wrapper"]}>
        {items.length > 0 ? (
          <>
            {displayItemsInCart}
            <div className={styles["products-total"]}>Your total is {totalPrice}€</div>
          </>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
