import styles from "./NavBar.module.css";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();

  function handleNavigate(url) {
    navigate(`/shop/:${url}`);
  }

  return (
    <div className={styles["navbar-wrapper"]}>
      <button onClick={() => handleNavigate("men's clothing")}>
        Men's Clothing
      </button>
      <button onClick={() => handleNavigate("women's clothing")}>
        Women's Chothing
      </button>
      <button onClick={() => handleNavigate("jewelery")}>Jewelry</button>
      <button onClick={() => handleNavigate("electronics")}>
        Electronics
      </button>
    </div>
  );
}

export default NavBar;
