import { createContext, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
alert("hey");
  console.log("here1a");
    console.log(cartItems);
    console.log(productToAdd);
    console.log("here2a");
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  console.log("e");
  console.log(cartItems);
  console.log(productToAdd);
  return [...cartItems, { ...productToAdd, quantity: 1 } ];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
    console.log("here1");
    console.log(cartItems);
    //console.debug(product);
    console.log("here2");
    alert("check it");

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
