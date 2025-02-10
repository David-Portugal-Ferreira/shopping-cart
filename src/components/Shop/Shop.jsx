import { useParams } from "react-router";

function Shop() {
    const { category } = useParams();

    const requestProducts = category !== undefined ? category : "";

    console.log("Product " + requestProducts);

    return <p>Shop Page</p>
}

export default Shop;
