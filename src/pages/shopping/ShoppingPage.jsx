
import { useNavigate } from 'react-router-dom';
import './shoppingStyle.css';
import { BiArrowBack } from 'react-icons/bi';

const ShoppingPage = () => {
	const navigate = useNavigate();
	return (
		<div className="container-sho">
			<div className="demo">
				<div className="circle">
					<div className="inner" />
				</div>
			</div>
			<h2>En desarrollo, muy pronto...</h2>
			<p>Aqui podras ver el estado de tu carrito</p>
			<button onClick={() => navigate('/')} className="text-white gap-2 mt-3 inline-flex items-center px-5 py-4 bg-blue-500 hover:bg-indigo-600 hover:text-white  rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200 "><i><BiArrowBack/> </i>  Go Home</button>
			
		</div>
	);
};

export default ShoppingPage;
