import { Link } from "react-router";
import styles from "./HomePageCards.module.css"

function HomePageCards({ name, image }) {
  return (
    <Link to={`shop/:${name}`}>
      <div className={styles["homepage-individual-card"]} style={{backgroundImage: `url(${image})`}}>
        <h1>{name}</h1>
      </div>
    </Link>
  );
}

export default HomePageCards;
