import { createContext, useContext, useReducer } from "react";

const ItemContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
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

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <ItemContext.Provider value={{ count, increment, decrement }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
