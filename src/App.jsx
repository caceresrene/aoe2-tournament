import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { ErrorPage } from './pages/ErrorPage';
import Civilizations from './pages/Civilizations';
import Home from './pages/Home';

const App = () => {
	// TODO: 1. Rutas (react router)✅, LocalStorage, Dark Mode✅
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/civilizations' element={<Civilizations />} />
				{/* la pagina 404 siempre va al final con path='*' */}
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

export default App;
