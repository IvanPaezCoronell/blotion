import { useState } from 'react';
import Filters from './components/Filters';
import RootLayout from './components/Layout';
import { Products } from './components/Products';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/cart';
import useFilters from './hooks/useFilters';
import {products as initialProducts} from './mocks/products.json'

function App() {
	const [products] = useState(initialProducts);
	const { filters, filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);
	

	return (
		<RootLayout>
			<CartProvider>
				<Cart />
				<Filters />
				<Products products={filteredProducts} />
			</CartProvider>
		</RootLayout>
	);
}

export default App;
