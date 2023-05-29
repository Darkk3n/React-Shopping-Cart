/* eslint-disable react/prop-types */
import { useId } from "react";
import { useCart } from "../hooks/useCart.js";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";

export function Cart() {
	const cartCheckBoxId = useId();
	const { cart, clearCart, addToCart } = useCart();

	function CartItem({ thumbnail, price, title, quantity, addToCart }) {
		return (
			<li>
				<img src={thumbnail} alt={title} />
				<div>
					<strong>{title}</strong> - ${price}
				</div>
				<footer>
					<small>Qty: {quantity}</small>
					<button onClick={addToCart}>+</button>
				</footer>
			</li>
		);
	}
	return (
		<>
			<label className="cart-button" htmlFor={cartCheckBoxId}>
				<CartIcon />
			</label>
			<input id={cartCheckBoxId} type="checkbox" hidden />
			<aside className="cart">
				<ul>
					{cart.map((i) => (
						<CartItem key={i.id} addToCart={() => addToCart(i)} {...i} />
					))}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
}
