import Filters from '../../components/Filters';
import Cart from '../../components/cart/Cart';
import { CartProvider } from '../../context/cart';
import useFilters from '../../hooks/useFilters';
import { products as initialProducts } from '../../mocks/products.json';
import { AllProducts } from '../../components/AllProducts';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';

const ProductsPage = () => {
	const [products] = useState(initialProducts);
	const { filters, filterProducts } = useFilters();

	const filteredProducts = filterProducts(products);
	return (
		<CartProvider>
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white">
				<Cart />
				<div className="container rounded  text-center mx-auto p-12 bg-blue-400">
					<div className="flex flex-col lg:flex-row items-center justify-between">
		
						<h2 className="p-2 text-center text-5xl tracking-tighter text-white font-bold">
							Todo a
							<br className="sm:hidden" /> 10% de descuento!
						</h2>
						<div className="space-x-2 text-center py-2 lg:py-0">
							<span> Usando el codigo:</span>
							<span className="font-bold text-lg">Blotion</span>
						</div>
					</div>
				</div>
				<Filters />
				<AllProducts products={filteredProducts} />
			</main>
			<Footer />
		</CartProvider>
	);
};

export default ProductsPage;
