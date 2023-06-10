import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import ProductsPage from '../pages/products/ProductsPage'
import NotFoundPage from '../pages/404/NotFoundPage'
import ShoppingPage from '../pages/shopping/ShoppingPage';

const RoutesApp = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" Component={App} />
					<Route path="/*" Component={NotFoundPage} />
					<Route path="/products" Component={ProductsPage} />
					<Route path="/shopping" Component={ShoppingPage} />
				</Routes>
			</Router>
		</div>
	);
};

export default RoutesApp;
