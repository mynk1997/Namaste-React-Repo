import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSclice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatcher = useDispatch();
  const handleClearItems = () => {
    dispatcher(clearItems());
  };
  console.log(cartItems);
  return (
    <div>
      <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className=" p-2 m-2 bg-red-700 text-white rounded-lg"
          onClick={() => {
            handleClearItems();
          }}
        >
          Clear Items
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems?.length === 0 && (
         <h1> Cart is empty. Add Items to the cart!</h1>
        )}
         <ItemList item={cartItems} />
      </div>

    </div>
  );
};

export default Cart;
