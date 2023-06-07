import { useState } from 'react';
import Filters from './components/Filters';
import RootLayout from './components/Layout';
import { Products } from './components/Products';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/cart';
import useFilters from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json';
import Header from './components/Header';
import Carrousel from './components/Carrousel'
import Faq from './components/Faq';

function App() {
	const [products] = useState(initialProducts);
	const { filters, filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);

	return (
		<RootLayout>
			<main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white">
				<CartProvider>
					<Header/>
					<Cart />
					<Carrousel />
					{/* <Filters /> */}
					<Products products={filteredProducts} />
					<Faq />
				</CartProvider>
			</main>
		</RootLayout>
	);
}

export default App;
