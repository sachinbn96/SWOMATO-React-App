import { useContext } from "react";
import { currencyFormatter } from "../util/formatter";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-price">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleMealToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
