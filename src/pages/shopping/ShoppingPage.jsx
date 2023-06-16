import Cart from '../../components/shopping/Cart';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EmptyCart from '../../components/shopping/emptyCart/EmptyCart';
import { useId } from 'react';
import { useCart } from '../../hooks/useCart';

const ShoppingPage = () => {
	const { cart } = useCart();

	return (
		<div>
			<Navbar />
			{/* <Cart /> */}
			{/* <EmptyCart /> */}
			{cart.length === 0 ? <EmptyCart /> : <Cart />}
			{/* {(cart === ) ? <EmptyCart /> : <Cart /> } */}
			{/* {(cart === 0) ? <Cart /> : <EmptyCart /> } */}

			<Footer />
		</div>
	);
};

export default ShoppingPage;
