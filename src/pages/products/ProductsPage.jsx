import Filters from '../../components/Filters';
import Cart from '../../components/cart/Cart';
import { CartProvider } from '../../context/cart';
import useFilters from '../../hooks/useFilters';
import { products as initialProducts } from '../../mocks/products.json';
import { AllProducts } from '../../components/AllProducts';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductsPage = () => {
	const [products] = useState(initialProducts);
	const { filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);
	return (
		<>
		<Navbar />
		<main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white">
			<Cart />
			<Filters />
			<AllProducts products={filteredProducts} />
		</main>
		<Footer />
		
		</>
		
		
	);
};

export default ProductsPage;
