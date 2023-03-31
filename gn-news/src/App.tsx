import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { fetchTopHeadlines } from './redux/slices/news'
import { AppDispatch } from './redux/store'

import routes from './routes'

const App: FC = () => {
	const router = useRoutes(routes)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchTopHeadlines())
	}, [])

	return <>{router}</>
}

export default App
