import { useLocation } from "react-router";

function Cart() {
  const location = useLocation();
  const items = location.state.cart;

  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => {
          return <div key={item.id}>{item.prod.title}</div>;
        })
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
