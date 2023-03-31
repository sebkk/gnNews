import { useState } from 'react'

export const useArticlePopperLogic = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

	const open = !!anchorEl
	const id: string | undefined = open ? 'article-popover' : undefined

	const handleOpenPopper = (e: React.MouseEvent<HTMLDivElement>) =>
		setAnchorEl(e.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return {
		anchorEl,
		handleOpenPopper,
		handleClose,
		open,
		id,
	}
}
