import { Link } from "react-router";
import Header from "./Header/Header";

function Error() {
  return (
    <>
      <Header />
      <div>
        <h1>There's been a problem</h1>
        <Link to={"/"}>Click here to go back to Home Page</Link>
      </div>
    </>
  );
}

export default Error;
