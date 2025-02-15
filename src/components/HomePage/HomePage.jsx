import { Link } from "react-router";
import useGetData from "../../hooks/getData";
import HomePageCards from "../HomePageCards/HomePageCards";
import Loading from "../Loading/Loading";
import styles from "./HomePage.module.css";
import electronicsImg from "../../assets/electronics.jpg";
import jewelryImg from "../../assets/jewelry.jpg";
import menClothingImg from "../../assets/menclothing.jpg";
import womenClothingImg from "../../assets/womenclothing.jpg";

function HomePage() {
  const { data, loading, error } = useGetData("products/categories");

  const categoryImages = {
    "electronics": electronicsImg,
    "jewelery": jewelryImg,
    "men's clothing": menClothingImg,
    "women's clothing": womenClothingImg,
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles["homepage-wrapper"]}>
      <div className={styles["homepage-cards"]}>
        {data.map((category, index) => (
          <HomePageCards
            key={index}
            name={category}
            image={categoryImages[category]}
          />
        ))}
      </div>
      <div className={styles.shopButton}>
        <Link to="shop/"> Shop Now</Link>
      </div>
    </div>
  );
}

export default HomePage;
