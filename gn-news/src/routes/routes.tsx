import { lazy } from 'react'

import { Layout } from '../layout'
import { LazyLoader } from '../components'

const Main = LazyLoader(lazy(() => import('../pages/Main/Main')))
const CountryNews = LazyLoader(
	lazy(() => import('../pages/CountryNews/CountryNews'))
)

const ROUTES = [
	{
		path: '',
		element: <Layout />,
		children: [
			{ path: '/', element: <Main /> },
			{ path: '/country/:countryCode', element: <CountryNews /> },
		],
	},
]

export default ROUTES
