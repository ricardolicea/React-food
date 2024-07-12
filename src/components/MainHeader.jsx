import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";

export default function MainHeader() {

  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart(){
    console.log("clcik")
    userCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="React food logo"></img>
        <h1>Reactfood</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>Cart({totalItems})</Button>
      </nav>
    </header>
  );
}
