import { useParams, Link } from "react-router";
import { useState } from "react";
import useGetData from "../../hooks/getData";
import Loading from "../Loading";
import Error from "../Error";
import ProductCards from "../ProductCards/PorductCards";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import styles from "./Shop.module.css";
import Cart from "../Cart/Cart";

function Shop() {
  const { category } = useParams();
  const [cart, setCart] = useState([]);
  const endpoint = category
    ? `products/category/${category.slice(1)}`
    : `products`;
  const { data, loading, error } = useGetData(endpoint);

  function addItemsToCart(product) {
    let foundCartItem = false;
    if (cart.length === 0) {
      setCart([...cart, product]);
      return;
    } else {
      let productsInCart = [...cart];
      productsInCart.forEach((prod) => {
        if (prod.prod.id === product.prod.id) {
          prod.numberOfItems += product.numberOfItems;
          setCart(productsInCart);
          foundCartItem = true;
        }
      });
      if (!foundCartItem) {
        setCart([...cart, product]);
      }
    }
  }

  if (loading)
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  if (error) return <Error />;

  return (
    <>
      <Header>
        <Link to={"/cart"} state={{ cart }}>
          Cart
        </Link>
      </Header>
      <div className={styles["shop-content"]}>
        <NavBar />
        <div className={styles["products-wrapper"]}>
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
      </div>
    </>
  );
}

export default Shop;
