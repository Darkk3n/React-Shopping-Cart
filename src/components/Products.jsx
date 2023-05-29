/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart.js";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import "./Products.css";

export function Products({ products }) {
	const { addToCart, cart, removeFromCart } = useCart();

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	return (
		<main className="products">
			<ul>
				{products.slice(0, 10).map((p) => {
					const isProductInCart = checkProductInCart(p);
					return (
						<li key={p.id}>
							<img src={p.thumbnail} alt={p.title} />
							<div>
								<strong>{p.title}</strong> - ${p.price}
							</div>
							<div>
								<button
									style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
									onClick={() => {
										isProductInCart ? removeFromCart(p) : addToCart(p);
									}}
								>
									{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
