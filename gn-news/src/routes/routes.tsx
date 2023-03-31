import { lazy } from 'react'

import { Layout } from '../layout'
import { LazyLoader } from '../components'

const Main = LazyLoader(lazy(() => import('../pages/Main/Main')))

const ROUTES = [
	{
		path: '',
		element: <Layout />,
		children: [{ path: '/', element: <Main /> }],
	},
]

export default ROUTES
