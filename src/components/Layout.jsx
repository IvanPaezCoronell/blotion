import { CartProvider } from '../context/cart';
import { FiltersProvider } from '../context/filters';
import Footer from './Footer';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
	return (
		<div>
			<FiltersProvider>
				<CartProvider>
					<Navbar />
					{children}
					<Footer />
				</CartProvider>
			</FiltersProvider>
		</div>
	);
}
