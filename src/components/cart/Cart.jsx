import React, { useId } from 'react';
import './cart.css';
import { TiShoppingCart } from 'react-icons/ti';
import { BsCartXFill } from 'react-icons/bs';
import { useCart } from '../../hooks/useCart';


function CartItem({ thumbnail, price, title, quantity, addToCart }) {
	return (
		<ul>
			<li>
				<img src={thumbnail} alt={title} />
				<div>
					<strong>{title}</strong> - ${price}
				</div>
				<footer>
					<small > 
						Cantidad: {quantity}
					</small>
					<button onClick={addToCart}>+</button>
				</footer>
			</li>
		</ul>
	);
}

export default function Cart() {
	const cartCheckboxId = useId();

	const { cart, clearCart, addToCart } = useCart();
	return (
		<div>
			<label className="cart-button" htmlFor={cartCheckboxId}>
				<TiShoppingCart />
			</label>
			<input
				type="checkbox"
				hidden
				id={cartCheckboxId}
				className="text-gray-800"
			/>

			<aside className="cart">
				<ul>
					{cart.map(product =>
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>,
					)}
				</ul>

				<button onClick={clearCart}>
					<BsCartXFill />
				</button>
			</aside>
		</div>
	);
}
