
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {Badge} from "@nextui-org/badge";
import CartIcon from "./CartIcon";
import useStore from "@/store/store";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Cart = () => {
  const { cart, addToCart, deleteToCart, removeToCart, clearCart } = useStore();
  const total = cart.map((product) => product.price * product.quantity).reduce((a, b) => a + b, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(cart);
console.log(total)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="absolute right-[8px] top-[8px] z-[1000]  p-[4px] w-[32px] ">
        <Badge content={cart.length} size="lg" color="primary">
        <Button isIconOnly className="bg-stone-100 " onClick={toggleMenu}>
          <CartIcon />
        </Button>
        </Badge>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="h-screen w-[30rem] bg-white shadow-2xl top-[4rem] right-0 fixed p-2 z-[2000] overflow-y-auto"
          >
            <ul>
              {cart?.map((product) => (
               <CartItem key={product.id}
               addToCart={() => addToCart(product)}
              {...product}
              deleteToCart={() => deleteToCart(product)}
              removeToCart={() => removeToCart(product)}
               />
                  // <img
                  //   src={product.thumbnail}
                  //   className="h-20 w-20 rounded object-cover"
                  // />

                  // <h3>{product.title}</h3>

                  // <button onClick={deleteToCart}>
                  //   <span>borrar</span>
                  // </button>

                  // <div>
                  //   {product.quantity > 1 ? (
                  //     <button onClick={removeToCart}>-</button>
                  //   ) : (
                  //     <button onClick={deleteToCart}>-</button>
                  //   )}
                  //   <small>{product.quantity}</small>
                  //   <button onClick={addToCart}>+</button>
                  //   <strong>${product.price * product.quantity}</strong>
                  // </div>
              
              ))}
            </ul>

            <strong className="flex justify-end p-4">Total: ${`${parseFloat(total).toFixed(2)}`}</strong>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
export default Cart;

const CartItem = ({
  id,
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  deleteToCart,
  removeToCart,
}) => {
  return (
    <li className="flex mr-4">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link href={`products/${id}`}>
      <img src={thumbnail} alt={title} className="w-40 h-32 rounded object-cover"/>
      </Link>
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
          <Link href={`products/${id}`} className="text-xl font-semibold hover:underline pointer mb-5">
          {title}
          </Link>
          <div>
            <button onClick={deleteToCart}>
          <span>borrar</span>
        </button>
        </div>
        </div>
        <div className="flex gap-x-2 h-[36px]">
      <footer className="flex flex-1 max-w-[100px] items-center  border font-medium h-full">
        <button className="flex-1 h-full flex justify-center items-center" onClick={addToCart}>+</button>
        <small className="h-full flex justify-center items-center px-2">{quantity}</small>
        {quantity > 1 ? (
          <button className="flex-1 h-full flex justify-center items-center" onClick={removeToCart} >-</button>
        ) : (
          <button className="flex-1 h-full flex justify-center items-center" onClick={deleteToCart}>-</button>
        )}
       
      </footer>
        <div className="flex-1 flex justify-around items-center ">
        <strong  >${`${parseFloat(price).toFixed(2)}`}</strong>
      </div>
      <strong className="flex-1 flex justify-end items-center ">${`${parseFloat(price * quantity).toFixed(2)}`}</strong>
      </div>
      </div>
      </div>
    </li>
  );
};