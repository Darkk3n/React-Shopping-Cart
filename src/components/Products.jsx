/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./Icons.jsx";
import "./Products.css";

export function Products({ products }) {
	return (
		<main className="products">
			<ul>
				{products.map((p) => (
					<li key={p.id}>
						<img src={p.thumbnail} alt={p.title} />
						<div>
							<strong>{p.title}</strong> - ${p.price}
						</div>
						<div>
							<button>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
