/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext(); //only created once

export function FilterProvider({ children }) {
	const [filters, setFilters] = useState({ category: "all", minPrice: 250 });
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}
