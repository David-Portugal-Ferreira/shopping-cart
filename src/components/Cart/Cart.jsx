import { useLocation } from "react-router";
import Header from "../Header/Header";

function Cart() {
  const location = useLocation();
  const items = location.state.cart;

  return (
    <div>
      <Header />
      <div>
        {items.length > 0 ? (
          items.map((item) => {
            return <div key={item.id}>{item.prod.title}</div>;
          })
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
