import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // const navigate = useNavigate();
  return (
    <div className="container">
      <div className="welcome">
        <h1>Welcome</h1>
        <button className="btn btn-sm m-2 btn-success">
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            Go to Products
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
