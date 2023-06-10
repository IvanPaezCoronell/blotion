import { TiShoppingCart } from 'react-icons/ti';
import { AiFillStar } from 'react-icons/ai';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useCart } from '../hooks/useCart'


export function AllProducts({ products }) {
	const { addToCart, removeFromCart, cart } = useCart();

	const checkProductInCart = product => {
		return cart.some(item => item.id === product.id);
	};

	return (
		<section className="py-6 sm:py-12 bg-white-500 text-gray-100">
			<div className="container p-6 mx-1 space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl text-gray-900 font-bold">
						Productos Recomendados
					</h2>
				</div>
				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 rounded-lg ">
					{products.map(product => {
						const isProductInCart = checkProductInCart(product);

						return (
							<article
								className="flex flex-col bg-white text-gray-900 rounded-lg transition ease-in-out delay-5 hover:-translate-y-1 hover:scale-105"
								key={product.id}
							>
								<img
									src={product.thumbnail}
									alt={product.title}
									className="object-cover w-full h-52 bg-gray-500 border rounded-t-lg "
								/>

								<div className="flex flex-col flex-1 p-6 bg-gray-100 rounded-b-lg">
									<span className="text-gray-300">
										{product.brand}
									</span>

									<strong className="text-gray-900 flex justify-between">
										{product.title}
										<span className="flex justify-center items-center">
											<AiFillStar className="text-yellow-400" />{' '}
											{product.rating}
										</span>
									</strong>

									<h5 className="flex-1 py-2 text-sm font-semibold leading-snug text-gray-400">
										{product.description}
									</h5>

									<div className="flex flex-wrap justify-between pt-3 space-x-2 text-lg">
										<span className="text-gray-600">
											<strong>
												${product.price}
											</strong>
										</span>
										<span>
											<button
												style={{
													color: isProductInCart ? 'red' : '#09f',
												}}
												onClick={() =>
													isProductInCart
														? removeFromCart(product)
														: addToCart(product)}
											>
												{isProductInCart
													? <MdRemoveShoppingCart />
													: <div className="px-8 py-2 rounded bg-blue-100 ">
															{' '}<TiShoppingCart />
														</div>}
											</button>
										</span>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
