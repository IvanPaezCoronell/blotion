import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import ProductsPage from '../pages/products/ProductsPage'
import NotFoundPage from '../pages/404/NotFoundPage'

const RoutesApp = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" Component={App} />
					<Route path="/*" Component={NotFoundPage} />
					<Route path="/products" Component={ProductsPage} />
				</Routes>
			</Router>
		</div>
	);
};

export default RoutesApp;
