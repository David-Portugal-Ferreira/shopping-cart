import { Link } from "react-router";
import useGetData from "../../hooks/getData";
import HomePageCards from "../HomePageCards/HomePageCards";
import Loading from "../Loading";

function HomePage() {
  const { data, loading, error } = useGetData("products/categories");

  return (
    <div>
      {error ? <Error /> : ""}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            {data.map((categorie, index) => (
              <HomePageCards key={index} name={categorie} />
            ))}
          </div>
          <div>
            <Link to="shop/"> Shop Now</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
