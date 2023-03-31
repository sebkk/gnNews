import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<CssBaseline />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)

reportWebVitals()
