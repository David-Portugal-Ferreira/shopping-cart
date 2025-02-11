import { Link } from "react-router";
import useGetData from "../../hooks/getData";
import HomePageCards from "../HomePageCards/HomePageCards";
import Loading from "../Loading";
import styles from "./HomePage.module.css"

function HomePage() {
  const { data, loading, error } = useGetData("products/categories");

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles["homepage-wrapper"]}>
      <div className={styles["homepage-cards"]}>
        {data.map((categorie, index) => (
          <HomePageCards key={index} name={categorie} />
        ))}
      </div>
      <div className={styles.shopButton}>
        <Link to="shop/"> Shop Now</Link>
      </div>
    </div>
  );
}

export default HomePage;
