import { useParams } from "react-router";
import { useState } from "react";
import useGetData from "../../hooks/getData";
import Loading from "../Loading";
import Error from "../Error";
import ProductCards from "../ProductCards/PorductCards";

function Shop() {
  const { category } = useParams();
  let itemsToFetch =
    category === undefined
      ? ""
      : category == ":men's clothing"
      ? "men's%20clothing"
      : category == ":women's clothing"
      ? "women's%20clothing"
      : category == ":jewelery"
      ? "jewelery"
      : category == ":electronics"
      ? "electronics"
      : "";
  const [items, setItems] = useState([]);
  const { data, loading, error } =
    itemsToFetch === ""
      ? useGetData(`products`)
      : useGetData(`products/category/${itemsToFetch}`);

  function addItemsToCart(prod, numberOfItems) {
    if(items.length === 0) {
        setItems([{prod, numberOfItems: numberOfItems}]);
        return;
    } else {
        setItems([...items, { prod, numberOfItems: numberOfItems }]);
    }
  }

  console.log(items)

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="products-wrapper">
      {data.map((prod) => {
        return (
          <ProductCards
            key={prod.id}
            prod={prod}
            addItemsToCart={addItemsToCart}
          />
        );
      })}
    </div>
  );
}

export default Shop;
