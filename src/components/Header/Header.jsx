import styles from "./Header.module.css";
import { Link } from "react-router";

function Header({ children }) {
  return (
    <div className={styles.header}>
      <h1>
        <Link to={"/shop"}>Shop Name</Link>
      </h1>
      {children}
    </div>
  );
}

export default Header;
