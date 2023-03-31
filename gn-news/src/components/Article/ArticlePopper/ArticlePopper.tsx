import { Popover, styled, css, Typography, Divider } from '@mui/material'
import { FC } from 'react'

import { TArticle } from '@/redux/slices/news'

const Content = styled('div')(
	({ theme }) => css`
		padding: ${theme.spacing(4)};
		max-width: 350px;

		> hr {
			margin: ${theme.spacing(2, 0)};
		}

		> a {
			text-align: end;
			display: block;
		}
	`
)

const ArticlePopper: FC<{
	id: string | undefined
	open: boolean
	anchorEl: HTMLDivElement | null
	onClose: () => void
	article: TArticle
}> = ({ id, open, anchorEl, onClose, article }) => {
	const { author, url, content, description } = article || {}

	return (
		<Popover id={id} open={open} onClose={onClose} anchorEl={anchorEl}>
			<Content>
				<Typography variant='h5'>{author ?? 'N/D'}</Typography>
				<Divider />
				<Typography>{content ?? description}</Typography>
				<Divider />
				<a href={url} rel='noreferrer' target='_blank'>
					Go to article
				</a>
			</Content>
		</Popover>
	)
}

export default ArticlePopper
