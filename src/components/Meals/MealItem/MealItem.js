import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const price = `$${props.price}`;

  return (
    <>
      {/* {props.mealsData.map((meal) => {
        const price = `$${meal.price.toFixed(2)}`;
        return ( */}
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.descripition}</div>
          <div className={styles.price}>{price}</div>
        </div>

        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
      {/* );
      })} */}
    </>
  );
};
export default MealItem;
