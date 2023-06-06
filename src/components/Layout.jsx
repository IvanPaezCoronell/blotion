import { CartProvider } from '../context/cart';
import Footer from './Footer';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
	return (
		<div>
			<CartProvider>
				<Navbar />
				{children}
				<Footer />
			</CartProvider>
		</div>
	);
}
