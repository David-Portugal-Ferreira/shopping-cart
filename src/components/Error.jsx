import { Link } from "react-router";

function Error() {
    return (
        <div>
            <h1>There's been a problem</h1>
            <Link to={"/"}>Click here to go back to Home Page</Link>
        </div>
    )
}

export default Error;