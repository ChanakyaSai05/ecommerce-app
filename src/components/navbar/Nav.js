import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { searchevent } from "../../actions";

function Nav() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { logout } = useAuth0();
  const cart = useSelector((state) => state.cart);
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="nav">
      <div className="first-child-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          Ecommerce
        </Link>
      </div>

      <div className="second-child-nav">
        <div>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </div>

        <div>
          <Link to="/account" style={{ textDecoration: "none" }}>
            Account
          </Link>
        </div>
        <div>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span className="cart-number">
              {cart.cart.length === 0 ? "" : cart.cart.length}
            </span>
            <span style={{ marginRight: "4px" }}>
              <i class="bi bi-cart"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </span>
            Cart
          </Link>
        </div>

        <div>Hii chanakya</div>
        <div className="third-child-nav">
          <input
            type="text"
            placeholder="   Search here"
            value={search}
            onChange={(e) => dispatch(searchevent(e.target.value))}
          />
        </div>
        <div>
          {user ? (
            <button className="logout-btn" onClick={() => logout()}>
              Logout
            </button>
          ) : (
            <button className="logout-btn" onClick={() => loginWithRedirect()}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
