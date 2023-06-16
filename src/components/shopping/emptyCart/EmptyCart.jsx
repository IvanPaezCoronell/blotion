import './emptyCart.css';
import { TiShoppingCart } from 'react-icons/ti';

const EmptyCart = () => {
	return (
		<section className="flex items-center h-full p-16 bg-ehite text-gray-100 pt-20 pb-20">
			<div className="container flex flex-col items-center justify-center px-5 mb-20 pb-20 mx-auto my-8">
				<div className="max-w-md text-center mb-20 pb-20">
					<h2 className="mb-8 font-extrabold text-9xl flex justify-center text-gray-600">
						<span className="sr-only">Error</span>
						<TiShoppingCart />
					
					</h2>
					<p className="text-2xl text-gray-600 font-semibold md:text-3xl">
					Tu Carro está vacío
					</p>
					<p className="mt-4 mb-8 text-gray-400">
					En Blotion tenemos más de 50 mil productos para que elijas lo que más te gusta.
					</p>
					<a
						rel="noopener noreferrer"
						href="/products"
						className="p-2 mb-20 font-semibold rounded bg-blue-400 text-gray-900"
					>
						Ver todos los productos
					</a>
				</div>
			</div>
		</section>
	);
};

export default EmptyCart;
