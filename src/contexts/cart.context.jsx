
import { createContext, useState, useEffect } from 'react';

let name = 'asim';
let place = "world";
//return "<h1>" + strings +  "</h1>";
//return `<h1>${strings}</h1>`;



let firstName = "Sachin";
let lastName = "Tendulkar";
let topic = "JavaScript";
 
function transform(strings1, ...expr) {
  console.log(strings1);
  let str = '';
  strings1.forEach((string, i) => {
      str += string + (expr[i] || '');
  });
  return str;
}
 
function fun1(a) { 
  alert("func1");
  let 
  
  
  
  x = function fun2(a) { 
    alert("fun2");
      let b = 1;
      return a + a;
  }
  alert("return");
  //return fun2;
  }

  /*

  function fun1(a) {  
              fun = function fun2(b) { 
                return a + b;
              }
              return fun;
            }

  */


function test(){
console.log(transform`come${firstName}${lastName}.Learn${topic}here${topic}`);
 alert("teslocalhostttl");
}
fun1("this is test strint");



export const addCartItem = (cartItems, productToAdd) => {
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


  
 


alert("aaa");
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};



export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
