import { FC } from 'react'
import { Grid, Card, styled, css, Typography } from '@mui/material'

import { TArticle } from '@/redux/slices/news'
import { useArticlePopperLogic } from './ArticlePopper/ArticlePopper.logic'
import { ArticlePopper } from './ArticlePopper'

const StyledCard = styled(Card)(
	({ theme }) => css`
		width: 100%;
		height: 100%;
		padding: ${theme.spacing(2)};
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`
)

export const Title = styled(Typography)(
	({ theme }) => css`
		color: ${theme.palette.primary.dark};
		font-weight: ${theme.typography.fontWeightBold};
		margin-bottom: ${theme.spacing(0.5)};
	`
)

export const SourceTypography = styled(Typography)(
	({ theme }) => css`
		opacity: 0.7;
		margin-bottom: ${theme.spacing(3)};
		font-size: ${theme.typography.pxToRem(15)};
	`
)

const Image = styled('img')(
	({ theme }) => css`
		width: 280px;
		height: auto;
		align-self: center;
		margin-bottom: ${theme.spacing(2)};
	`
)

const Article: FC<{ article: TArticle }> = ({ article }) => {
	const { description, title, urlToImage, source } = article || {}
	const { name } = source || {}

	const { anchorEl, handleOpenPopper, handleClose, open, id } =
		useArticlePopperLogic()

	return (
		<Grid item xs={12} md={6} lg={4}>
			<StyledCard aria-describedby={id} onClick={handleOpenPopper}>
				<div>
					<Title>{title}</Title>
					<SourceTypography>{name}</SourceTypography>
				</div>
				{urlToImage && <Image src={urlToImage || undefined} alt={title} />}
				<Typography variant='subtitle2'>{description ?? 'N/D'}</Typography>
			</StyledCard>
			<ArticlePopper
				anchorEl={anchorEl}
				onClose={handleClose}
				open={open}
				id={id}
				article={article}
			/>
		</Grid>
	)
}

export default Article
