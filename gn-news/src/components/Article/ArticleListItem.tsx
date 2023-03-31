import { FC } from 'react'
import { Grid, Card, styled, css } from '@mui/material'

import { TArticle } from '@/redux/slices/news'

import { Title, SourceTypography } from './Article'
import { format } from 'date-fns'

const StyledCard = styled(Card)(
	({ theme }) => css`
		width: 100%;
		padding: ${theme.spacing(3, 2)};
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;

		> h6 {
			white-space: pre-line;
			margin-right: ${theme.spacing(4)};
		}

		> div > p {
			margin-bottom: 0;
			text-align: end;
		}
	`
)

const ArticleListItem: FC<{ article: TArticle }> = ({ article }) => {
	const { title, source, publishedAt } = article || {}
	const { name } = source || {}

	return (
		<Grid item xs={12}>
			<StyledCard>
				<Title variant='subtitle2'>{title}</Title>
				<div>
					<SourceTypography>{name}</SourceTypography>
					<SourceTypography>
						{format(new Date(publishedAt), 'd MMM yyyy H:mm')}
					</SourceTypography>
				</div>
			</StyledCard>
		</Grid>
	)
}

export default ArticleListItem
