import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../context/UserProgressContext";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  const userCtx = useContext(UserProgressContext);

  function handleCloseCart(){
    userCtx.hideCart();
  }
  return (
    <Modal className="cart" open={userCtx.progress ==='cart'}>
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
