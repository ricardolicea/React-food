import Cart from "./components/Cart";
import MainHeader from "./components/MainHeader";
import Meals from "./components/Meals";
import { CartContextProvider } from "./context/CartContext";
import { UserProgressContextProvider } from "./context/UserProgressContext";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <MainHeader />
        <Meals></Meals>
        <Cart></Cart>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
