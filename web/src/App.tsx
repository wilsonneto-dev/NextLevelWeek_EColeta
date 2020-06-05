import React from 'react';

import './App.css';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<>
			<Routes />
			<ToastContainer />
		</>
	);
}

export default App;
