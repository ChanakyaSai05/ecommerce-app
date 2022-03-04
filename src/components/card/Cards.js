import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import "./Cards.css";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { cartadded } from "../../actions";

function Cards({ id, title, image, price, rating }) {
  const [cartState, setCartState] = useState(false);
  const totalCartState = useSelector((state) => state.cart);
  const result = totalCartState.cart.map((item) => item.id);

  const dispatch = useDispatch();
  const addButton = () => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === id) {
        setCartState(true);
        return;
      }
    }
    if (!cartState) {
      dispatch(cartadded(id, title, image, price, rating));
      setCartState(false);
    }
  };
  return (
    <div className="card-component">
      <Card className="m-2">
        <CardImg alt="Card image cap" src={image} width="400" height="300" />
        <CardBody>
          <div style={{ height: "10vh" }}>
            <CardTitle tag="h5">{title}</CardTitle>
          </div>

          <CardSubtitle className="mb-2 text-muted" tag="h6">
            <div style={{ fontWeight: "bold" }}>₹ {price}</div>
            <div>
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                starDimension="25px"
                numberOfStars={5}
                name="rating"
              />
            </div>
          </CardSubtitle>

          <Button color="success" onClick={addButton}>
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
