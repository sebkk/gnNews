import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { styled, css, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import { selectTopHeadlinesCollectionCount } from '../../redux/selectors'
import { format } from 'date-fns'

const Wrapper = styled('footer')(
	({ theme }) => css`
		position: absolute;
		bottom: 0;
		width: 100%;
		border-top: 2px solid ${theme.palette.divider};
		padding: ${theme.spacing(6, 3)};
		display: flex;
		justify-content: space-between;

		> h6 {
			display: flex;
			align-items: center;
			line-height: 22px;
			> svg {
				margin-right: ${theme.spacing(0.5)};
			}
		}
	`
)

const Footer = () => {
	const [time, setTime] = useState(format(new Date(), 'H:mm'))

	const totalResults = useSelector(selectTopHeadlinesCollectionCount)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(format(new Date(), 'H:mm'))
		}, 60000)

		return () => clearInterval(intervalId)
	})

	return (
		<Wrapper>
			<Typography variant='subtitle2'>
				Articles on main page: {totalResults}
			</Typography>
			<Typography variant='subtitle2'>
				<AccessTimeIcon fontSize='small' />
				{time}
			</Typography>
		</Wrapper>
	)
}

export default Footer
