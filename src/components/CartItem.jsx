import { currencyFormatter } from "../util/formatter";

export default function CartItem({
  name,
  quantity,
  price,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </p>
    </li>
  );
}
