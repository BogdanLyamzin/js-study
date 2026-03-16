import { Link } from "react-router-dom";

const NotFoundPage = ()=> {
    return (
        <div>
            <h2>This page not found</h2>
            <Link to="/">To home page</Link>
        </div>
    )
}

export default NotFoundPage;