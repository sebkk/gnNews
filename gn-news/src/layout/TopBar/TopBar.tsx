import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Toolbar,
	AppBar as MuiAppBar,
	AppBarProps as MuiAppBarProps,
	IconButton,
	styled,
	Button,
	ToggleButtonGroup,
	ToggleButton,
	Box,
} from '@mui/material'

import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'

import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const StyledButton = styled(Button)(({ theme }) => ({
	color: theme.palette.common.white,
	fontSize: theme.typography.pxToRem(22),
}))

const StyledToolbar = styled(Toolbar)(() => ({
	justifyContent: 'space-between',
}))

const TopBar: FC<{
	open: boolean
	handleDrawerOpen: (open: boolean) => void
}> = ({ open, handleDrawerOpen }) => {
	const navigate = useNavigate()

	const handleNavigate = () => navigate('/')

	return (
		<AppBar position='fixed' open={open}>
			<StyledToolbar>
				<Box>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={() => handleDrawerOpen(true)}
						edge='start'
						sx={{
							marginRight: 5,
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<StyledButton onClick={handleNavigate}>News Page</StyledButton>
				</Box>
				<ToggleButtonGroup exclusive color='secondary'>
					<ToggleButton value='module' aria-label='module'>
						<ViewModuleIcon />
					</ToggleButton>
					<ToggleButton value='list' aria-label='list'>
						<ViewListIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</StyledToolbar>
		</AppBar>
	)
}

export default TopBar
