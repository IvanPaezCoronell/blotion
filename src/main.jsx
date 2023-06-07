import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesApp from './routes/RoutesApp.jsx';
import { FiltersProvider } from './context/filters';
import { CartProvider } from './context/cart';

ReactDOM.createRoot(document.getElementById('root')).render(
	<FiltersProvider>
		<CartProvider>
			<RoutesApp />
		</CartProvider>
	</FiltersProvider>,
);
