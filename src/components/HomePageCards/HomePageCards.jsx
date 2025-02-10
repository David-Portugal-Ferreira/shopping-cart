import { Link } from "react-router";

function HomePageCards({ name }) {
  return (
    <Link to={`shop/:${name}`}>
      <div>
        <h1>{name}</h1>
      </div>
    </Link>
  );
}

export default HomePageCards;
