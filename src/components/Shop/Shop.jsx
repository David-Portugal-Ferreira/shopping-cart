import { useParams, Link } from "react-router";
import { useState } from "react";
import useGetData from "../../hooks/getData";
import Loading from "../Loading";
import Error from "../Error";
import ProductCards from "../ProductCards/PorductCards";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import styles from "./Shop.module.css";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

function Shop() {
  const { category } = useParams();
  const [cart, setCart] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const endpoint = category
    ? `products/category/${category.slice(1)}`
    : `products`;
  const { data, loading, error } = useGetData(endpoint);

  function addItemsToCart(product) {
    let foundCartItem = false;
    let productsInCart = [...cart];
    productsInCart.forEach((prod) => {
      if (prod.prod.id === product.prod.id) {
        prod.numberOfItems += product.numberOfItems;
        setCart(productsInCart);
        setNumberOfItems((prevNumber) => prevNumber + product.numberOfItems);
        foundCartItem = true;
      }
    });
    if (!foundCartItem) {
      setCart([...cart, product]);
      setNumberOfItems((prevNumber) => prevNumber + product.numberOfItems);
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
          <Icon path={mdiCartOutline} size={1.5} />
          <span>{numberOfItems}</span>
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
