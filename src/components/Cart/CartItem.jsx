import styles from "./Cart.module.css";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

export function CartItem({ item, handleDeleteItem }) {
  return (
    <div className={styles["product-info"]}>
      <p>{item.prod.title}</p>
      <input type="number" defaultValue={item.numberOfItems} readOnly />
      <span>{(item.numberOfItems * item.prod.price).toFixed(2)}€</span>
      <button className={styles.delete} onClick={() => handleDeleteItem(item.prod.id)}>
        <Icon path={mdiDeleteOutline} size={1} />
      </button>
    </div>
  );
}
