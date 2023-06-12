import { useState } from 'react';
// import Filters from './components/Filters';
import { Products } from './components/Products';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/cart';
import useFilters from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json';
import Header from './components/Header';
import Carrousel from './components/Carrousel'
import Faq from './components/Faq';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	const [products] = useState(initialProducts);
	const { filters, filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);

	return (
		<>
		
				<CartProvider>
					<Navbar />
					<main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white">
					<Header/>
					<Cart />
					<Carrousel />
					{/* <Filters /> */}
					<Products products={filteredProducts} />
					<Faq />
					</main>
					<Footer />
				</CartProvider>
			
		</>
	);
}

export default App;
