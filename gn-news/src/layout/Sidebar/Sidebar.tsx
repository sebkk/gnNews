import { FC } from 'react'
import {
	Drawer as MuiDrawer,
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	Theme,
	CSSObject,
	ListItemAvatar,
	Avatar,
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { COUNTRIES } from '../../constants'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

const Flag = styled('img')(() => ({
	width: 30,
	height: 'auto',
}))

const Sidebar: FC<{
	open: boolean
	handleDrawerOpen: (open: boolean) => void
}> = ({ open, handleDrawerOpen }) => (
	<Drawer variant='permanent' open={open}>
		<DrawerHeader>
			<IconButton onClick={() => handleDrawerOpen(false)}>
				<ChevronLeftIcon />
			</IconButton>
		</DrawerHeader>
		<Divider />
		<List>
			{COUNTRIES.map(({ name, flag, code }) => (
				<ListItem key={code} disablePadding sx={{ display: 'block' }}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
						}}
					>
						<ListItemAvatar
							sx={{
								minWidth: 0,
								mr: open ? 3 : 'auto',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Flag src={flag} alt={code} />
						</ListItemAvatar>
						<ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</Drawer>
)

export default Sidebar
