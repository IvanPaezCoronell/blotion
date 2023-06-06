import Footer from './Footer';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
