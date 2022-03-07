export const cartadded = (id, title, image, price, rating) => {
  return {
    type: "ADDTOCART",
    payload: {
      id: id,
      image: image,
      title: title,
      price: price,
      rating: rating,
    },
  };
};

export const cartpriceinc = (index, price) => {
  return {
    type: "CARTINC",
    payload: {
      index: index,
      price: price,
    },
  };
};
export const cartpricedec = (index, price) => {
  return {
    type: "CARTDEC",
    payload: {
      index: index,
      price: price,
    },
  };
};
export const cartremoved = (index) => {
  return {
    type: "REMOVEFROMCART",
    payload: index,
  };
};

export const cartempty = () => {
  return {
    type: "EMPTYCART",
  };
};

export const inccounter = (index) => {
  return {
    type: "INCREMENT",
    payload: index,
  };
};
export const deccounter = (index) => {
  return {
    type: "DECREMENT",
    payload: index,
  };
};
export const searchevent = (e) => {
  return {
    type: "EVENT",
    payload: e,
  };
};
