import { Link } from "react-router";
import Header from "../Header/Header";
import styles from "./Error.module.css"

function Error() {
  return (
    <>
      <Header /> 
      <div className={styles.wrapper}>
        <h1>There's been a problem</h1>
        <Link to={"/"}>Click here to go back to Home Page</Link>
      </div>
    </>
  );
}

export default Error;
