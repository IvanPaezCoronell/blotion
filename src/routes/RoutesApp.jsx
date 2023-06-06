import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Products from '../pages/products/Products';
import NotFoundPage from '../pages/404/NotFoundPage'

const RoutesApp = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" Component={App} />
					<Route path="/*" Component={NotFoundPage} />
					<Route path="/products" Component={Products} />
				</Routes>
			</Router>
		</div>
	);
};

export default RoutesApp;
