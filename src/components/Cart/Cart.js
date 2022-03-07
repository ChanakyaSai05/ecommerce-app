import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import StarRatings from "react-star-ratings";
import {
  cartremoved,
  cartempty,
  cartpriceinc,
  cartpricedec,
} from "../../actions";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
function Cart({ products }) {
  const items = useSelector((state) => state.cart);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(items);

  const incrementFun = (index) => {
    // console.log(index);
    // console.log(items[index].price);
    // console.log(products.data[index].price);
    dispatch(cartpriceinc(index, products.data[index].price));
  };
  const decrementFun = (index) => {
    dispatch(cartpricedec(index, products.data[index].price));
    if (items[index].price < products.data[index].price) {
      if (items.length === 1) {
        dispatch(cartremoved(index));
        navigate("/products");
      } else {
        dispatch(cartremoved(index));
      }
    }
  };
  const removeButton = (index) => {
    if (items.length === 1) {
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

  let totalResult = 0;
  let totalCheckOut = 0;

  function sf() {
    if (items.length === 0) {
      return;
    } else {
      let itemsCart = items;
      let itemsmap = itemsCart.map((el) => el.price);
      let sumResult = itemsmap.reduce((a, b) => a + b);
      totalResult = sumResult.toFixed(2);
      totalCheckOut = (sumResult + 40).toFixed(2);
      return sumResult;
    }
  }
  sf();
  // let totalResult = sumFunction.toFixed(2);
  // let totalCheckOut = (sumFunction + 40).toFixed(2);

  const filteredCart = items?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="cart-container">
      <div className="first-child-cart">
        <div className="first-child-cartHead">
          <div style={{ fontWeight: "bolder", fontSize: "27px" }}>
            My Cart({items.length})
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
                <div style={{ fontWeight: "bold" }}>
                  ₹ {product.price.toFixed(2)}
                </div>
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
                  <button
                    onClick={() => incrementFun(index)}
                    style={{
                      width: "2vw",
                      backgroundColor: "orangered",
                      color: "white",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementFun(index)}
                    style={{
                      width: "1.8vw",
                      backgroundColor: "orangered",
                      color: "white",
                    }}
                  >
                    -
                  </button>
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
            <div>Price({items.length} items)</div>
            <div>₹ {totalResult} </div>
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
            <div>₹ {totalCheckOut}</div>
          </div>
          <hr />
        </div>
        <div>
          {items.length === 0 ? (
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
