import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '../../redux/store'
import { fetchCountryNews } from '../../redux/slices/news'
import {
	selectCountryNewsArticles,
	selectSelectedView,
} from '../../redux/selectors'
import { Container } from '../Main/Main'
import { Article, ArticleListItem } from '../../components'

const CountryNews = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { countryCode } = useParams()

	const selectedView = useSelector(selectSelectedView)
	const countryNewsArticles = useSelector(selectCountryNewsArticles)

	useEffect(() => {
		dispatch(fetchCountryNews(countryCode))
	}, [countryCode])

	return (
		<Container spacing={3} container>
			{selectedView === 'module'
				? countryNewsArticles?.map(article => (
						<Article key={article?.url} article={article} />
				  ))
				: countryNewsArticles?.map(article => (
						<ArticleListItem key={article?.url} article={article} />
				  ))}
		</Container>
	)
}

export default CountryNews
