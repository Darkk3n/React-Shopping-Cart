/* eslint-disable no-unused-vars */
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";

export function App() {
	const { filterProducts } = useFilters();
	const filteredProducts = filterProducts(initialProducts);

	return (
		<>
			<Header />
			<Products products={filteredProducts} />;
			<Footer />
		</>
	);
}
