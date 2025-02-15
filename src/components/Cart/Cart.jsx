import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Nav from "../Navbar/NavBar";
import styles from "./Cart.module.css";
import { useSendDataToLocalStorage } from "../../hooks/sendDataToLocalStorage";
import { CartItem } from "./CartItem";
import { Link } from "react-router";

function calculateTotalPrice(items) {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.numberOfItems * item.prod.price;
  });
  return totalPrice.toFixed(2);
}

function Cart() {
  const [items, setItems] = useState(useSendDataToLocalStorage("get"));
  let totalPrice = calculateTotalPrice(items);

  function handleDeleteItem(id) {
    let newArray = items.filter((item) => item.prod.id !== id);
    setItems([...newArray])
  }

  useEffect(() => {
    useSendDataToLocalStorage("set", items)
  }, [items])

  const displayItemsInCart = items.map((item) => {
    return (
      <CartItem
        key={item.prod.id}
        item={item}
        handleDeleteItem={handleDeleteItem}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className={styles["products-wrapper"]}>
        <Link to={"/shop"} className={styles["continue-shop"]}>Continue Shopping</Link>
        {items.length > 0 ? (
          <>
            <h3>Your Cart</h3>
            {displayItemsInCart}
            <div className={styles["products-total"]}>
              Your total is {totalPrice}€
            </div>
          </>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </div>
  );
}

export default Cart;
