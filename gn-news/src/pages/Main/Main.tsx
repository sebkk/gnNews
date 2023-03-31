import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Grid, styled, css } from '@mui/material'

import { selectSelectedView, selectTopHeadlines } from '../../redux/selectors'
import { Article, ArticleListItem } from '../../components'

const Container = styled(Grid)(
	css`
		width: 100%;
	`
)

const Main: FC = () => {
	const topHeadlines = useSelector(selectTopHeadlines)

	const selectedView = useSelector(selectSelectedView)

	return (
		<Container spacing={3} container>
			{selectedView === 'module'
				? topHeadlines?.map(article => (
						<Article key={article?.url} article={article} />
				  ))
				: topHeadlines?.map(article => (
						<ArticleListItem key={article?.url} article={article} />
				  ))}
		</Container>
	)
}

export default Main
