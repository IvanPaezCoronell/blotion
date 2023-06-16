import { useId } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { MdRemoveShoppingCart } from 'react-icons/md';

function CartItem({
	thumbnail,
	discountPercentage,
	category,
	title,
	brand,
	price,
}) {
	return (
		<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100 rounded-lg m-4">
			<ul className="flex flex-col divide-y divide-gray-700">
				<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
					<div className="flex w-full space-x-2 sm:space-x-4">
						<img
							className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
							src={thumbnail}
							alt="Polaroid camera"
						/>
						<div className="flex flex-col justify-between w-full pb-4 ">
							<div className="flex justify-between w-full pb-2 space-x-2">
								<div className="space-y-1">
									<h3 className="text-lg font-semibold leading-snug sm:pr-8">
										{title}
									</h3>
									<p className="text-sm text-gray-400">
										{brand}
									</p>
									<p className="text-sm text-gray-400">
										{category}
									</p>
									<p className="text-sm text-red-400">
										descuento ${discountPercentage}
									</p>
								</div>
								<div className="text-right">
									<p className="text-lg font-semibold">
										${price}
									</p>
								</div>
							</div>
							{/* <div className="flex text-sm divide-x">
								<button
									type="button"
									className="flex items-center px-2 py-1 pl-0 space-x-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										className="w-4 h-4 fill-current"
									>
										<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" />
										<rect width="32" height="200" x="168" y="216" />
										<rect width="32" height="200" x="240" y="216" />
										<rect width="32" height="200" x="312" y="216" />
										<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" />
									</svg>
									<span>Remove</span>
								</button>
								<button
									type="button"
									className="flex items-center px-2 py-1 space-x-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										className="w-4 h-4 fill-current"
									>
										<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" />
									</svg>
									<span>Add to favorites</span>
								</button>
							</div> */}
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default function Cart() {
	const { cart, clearCart, addToCart } = useCart();
	const navigate = useNavigate();

	return (
		<div className="bg-white ">
			<div className="flex justify-center mb-20 pb-20">
				<ul className="border-b-2 mb-2 ">
					<h2 className="text-xl font-semibold  pl-4 pt-12">Tu carrito</h2>

					{cart.map(product =>
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>,
					)}
					<div className="flex justify-end ">
						<button
							onClick={clearCart}
							type="button"
							className="flex items-center px-2 p-3 bg-red-600 hover:bg-red-500 mb-12 mr-4 justify-center rounded-lg space-x-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-4 h-4 fill-white"
							>
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" />
								<rect width="32" height="200" x="168" y="216" />
								<rect width="32" height="200" x="240" y="216" />
								<rect width="32" height="200" x="312" y="216" />
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" />
							</svg>
							<span className="text-white text-xs">Vaciar Carrito</span>
						</button>
					</div>
				</ul>
			</div>

			<div className="space-y-1 text-center w-full h-full mt-12 ">
				<p className='font-bold'>Resumen de la orden</p>
				<p className='font-semibold'>Productos ({cart.length})</p>
				<p>
					Total:
					<span className="font-semibold"> (calcular total en desarrollo)</span>
				</p>
				<p className="text-sm text-gray-400 ">No incluye costos de envio.</p>
			</div>
			<div className="flex justify-center mt-3 mb-20 space-x-4">
				<button
					type="button"
					className="px-6 py-2 border rounded-md border-blue-400"
					onClick={() => navigate('/products')}
				>
					Seguir comprando
				</button>
				<button
					type="button"
					className="px-6 py-2 border rounded-md bg-blue-400 text-gray-900 border-violet-400"
				>
					<span className="sr-only sm:not-sr-only">Continuar </span>Compra
				</button>
			</div>
		</div>
	);
}
