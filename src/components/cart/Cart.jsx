import { useId } from 'react';
import './cart.css';
import { TiShoppingCart } from 'react-icons/ti';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

function CartItem({ thumbnail, price, title, brand }) {
	return (
		<div>
			<ul>
				<li>
					<img
						className="flex-shrink-0 border-transparent rounded"
						src={thumbnail}
						alt={title}
					/>
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-xs font-semibold text-white ">
								{title}
							</h3>
						</div>
						<div className="text-right">
							<p className="text-xs text-yellow-400 font-semibold">
								${price}
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default function Cart() {
	const cartCheckboxId = useId();
	const { cart, clearCart, addToCart } = useCart();
	const navigate = useNavigate();

	return (
		<div className="z-40 mb-12 fixed top-0 left-0 right-0 ">
			<label className="cart-button mb-12" htmlFor={cartCheckboxId}>
				<TiShoppingCart className="text-white" />
			</label>
			<input
				type="checkbox"
				hidden
				id={cartCheckboxId}
				className="text-gray-800"
			/>

			<aside className="cart mb-12">
				<div className="mt-8">
					<ul className="border-b-2 mb-2">
						{cart.map(product => 
							<CartItem
								key={product.id}
								addToCart={() => addToCart(product)}
								{...product}
							/>,
						)}
					</ul>

					<button
						onClick={clearCart}
						type="button"
						className="flex items-center px-2 py-1 pl-0 space-x-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="w-4 h-4 fill-red-500"
						>
							<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" />
							<rect width="32" height="200" x="168" y="216" />
							<rect width="32" height="200" x="240" y="216" />
							<rect width="32" height="200" x="312" y="216" />
							<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" />
						</svg>
						<span className="text-white text-xs">Vaciar</span>
					</button>

					{/* <div className="space-y-1 text-right mt-4">
						<p className="text-white">
							Total
							<span className="font-semibold text-white"> $342</span>
						</p>
						<p className="text-sm text-gray-400">No incluye costos de envio.</p>
					</div> */}
				</div>

				<button
					type="button"
					className="px-6 py-1 mt-5 text-xs rounded-md bg-blue-400 text-gray-900"
					onClick={() => navigate('/shopping')}
				>
					<span className="sr-only sm:not-sr-only">Continue to</span> Checkout
				</button>
			</aside>
		</div>
	);
}
