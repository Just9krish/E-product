import { createContext, useContext, useReducer } from "react";

const ItemContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "addToCart":
      const cart = { ...payload };
      return {
        ...state,
        cart: [...state.cart, cart],
      };
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  return context;
};

export const ItemContextProvider = ({ children }) => {
  const [{ cart, count }, dispatch] = useReducer(reducer, {
    cart: [],
    count: 0,
  });
  console.log(cart);
  const addToCart = (itemName, itemId, itemCount, total,amount, imgIndex) => {
    dispatch({
      type: "addToCart",
      payload: { itemName, itemId, itemCount, total, amount, imgIndex },
    });
  };

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <ItemContext.Provider
      value={{ cart, addToCart, count, increment, decrement }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
