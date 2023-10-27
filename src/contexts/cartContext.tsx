import { useContext, useEffect, createContext } from "react";
import { useState } from "react";
import { useAuth } from "./auth-context";

const CartContext = createContext(null);

type Product = {
  _id: string;
  name: string;
  image: string;
  type: string;
  price: number;
  discount: number;
};

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(`http://localhost:8080/api/cart/${user?.email}`);
      const cart = await res.json();

      if (cart.products) {
        setCart(cart.products);
      }
    };

    if (user?.email) {
      fetchCart();
    }
  }, []);

  const addToCart = async (product: Product) => {
    setCart((prevCart) => {
      const exitingProduct = prevCart.find(
        (prevProduct) => prevProduct._id === product._id
      );

      if (exitingProduct) {
        return prevCart;
      }

      const updatedCart = [...prevCart, product];

      fetch(`http://localhost:8080/api/cart/${user?.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: updatedCart,
        }),
      });

      return updatedCart;
    });
  };

  const removeFromCart = async (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => productId !== item?._id);

      fetch(`http://localhost:8080/api/cart/${user?.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: updatedCart,
        }),
      });

      return updatedCart;
    });
  };

  const value = {
    addToCart,
    cart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
