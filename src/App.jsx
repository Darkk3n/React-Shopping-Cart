/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";

function App() {
	const [products] = useState(initialProducts);
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 50,
	});

	const filterProducts = (products) => {
		return products.filter((p) => {
			return (
				p.price >= filters.minPrice &&
				(filters.category === "all" || p.category === filters.category)
			);
		});
	};

	const filteredProducts = filterProducts(products);

	return <Products products={filteredProducts} />;
}

export default App;
