import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes'

const App: FC = () => {
	const router = useRoutes(routes)

	return <>{router}</>
}

export default App
