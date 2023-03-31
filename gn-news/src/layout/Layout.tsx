import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, styled } from '@mui/material'

import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

const Layout: FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	const handleDrawerOpen = (open: boolean) => setOpen(open)

	return (
		<Box sx={{ display: 'flex' }}>
			<TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<Sidebar open={open} handleDrawerOpen={handleDrawerOpen} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Outlet />
			</Box>
		</Box>
	)
}

export default Layout
