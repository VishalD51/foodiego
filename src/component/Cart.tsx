import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

const Cart = () => {

    const cartItem = useSelector( store => store.cart.cartItem)

  return (
    <div className="m-auto  font-bold w-6/12">
      <h1 className="text-center">Cart</h1>
      {cartItem?.map( item => <CategoryItem item={item}/>)}
    </div>
  );
};

export default Cart;
