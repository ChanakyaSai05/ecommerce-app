import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import StarRatings from "react-star-ratings";
import { cartremoved, cartempty, inccounter, deccounter } from "../../actions";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const items = useSelector((state) => state.cart);
  const count = useSelector((state) => state.counter);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(items);
  const removeButton = (index) => {
    if (items.cart.length === 1) {
      dispatch(cartremoved(index));
      navigate("/products");
    } else {
      dispatch(cartremoved(index));
    }
  };

  const emptyBtn = () => {
    dispatch(cartempty());
    navigate("/products");
  };

  function sf() {
    if (items.cart.length === 0) {
      return;
    } else {
      let itemsCart = items.cart;
      let itemsmap = itemsCart.map((el) => el.price);
      let sumResult = itemsmap.reduce((a, b) => a + b);
      return sumResult;
    }
  }
  let sumFunction = sf();

  const incrementBtn = (index) => {
    dispatch(inccounter(index));
  };

  const decrementBtn = (index) => {
    dispatch(deccounter(index));
  };
  const filteredCart = items.cart?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="cart-container">
      <div className="first-child-cart">
        <div className="first-child-cartHead">
          <div style={{ fontWeight: "bolder", fontSize: "27px" }}>
            My Cart({items.cart.length})
          </div>
          <div style={{ fontWeight: "bold", paddingTop: "7px" }}>
            Deliver to
            <span style={{ marginLeft: "2px" }}>
              <input
                type="number"
                placeholder="Enter delivery pincode"
                style={{
                  borderTop: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                }}
              />
            </span>
            <span>
              <Button
                style={{ backgroundColor: "orangered", marginLeft: "2px" }}
              >
                Check
              </Button>
            </span>
          </div>
        </div>
        <div>
          <hr />
          {filteredCart?.map((product, index) => (
            <div key={product.id} className="cart-box">
              <div className="first-child1">
                <img
                  src={product.image}
                  alt="productImage"
                  width="240"
                  height="280"
                />
              </div>
              <div className="second-child1">
                <div style={{ fontWeight: "bold" }}>{product.title}</div>
                <div style={{ fontWeight: "bold" }}>₹ {product.price}</div>
                <div>
                  <StarRatings
                    rating={product.rating}
                    starRatedColor="blue"
                    starDimension="25px"
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
                <Button color="warning" onClick={() => removeButton(index)}>
                  Remove from cart
                </Button>
                <div>
                  <button onClick={() => incrementBtn(index)}>+</button>
                  {count}
                  <button onClick={() => decrementBtn(index)}>-</button>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
      <div className="second-child-cart">
        <div>
          <div className="second-child-cartHeader">PRICE DETAILS </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Price({items.cart.length} items)</div>
            <div>₹ {sumFunction} </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Delivery Charges</div>
              <div>FREE</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Packing Charges</div>
            <div>₹40</div>
          </div>
          <hr />
          <div className="second-child-cartFooter">
            <div>Total Amount</div>
            <div>₹ {sumFunction + 40}</div>
          </div>
          <hr />
        </div>
        <div>
          {items.cart.length === 0 ? (
            ""
          ) : (
            <div className="cart-footer">
              <div>
                <Button color="warning" onClick={emptyBtn}>
                  Empty cart
                </Button>
              </div>
              <div>
                <Button
                  style={{ backgroundColor: "orangered", border: "none" }}
                >
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Cart;
