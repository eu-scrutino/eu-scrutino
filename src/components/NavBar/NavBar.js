import AppBar from '@material-ui/core/AppBar'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { bool, func } from 'prop-types'
import useStyles from './styles'
import config from '../../config'

const NavBar = ({ open, handleDrawerOpen }) => {
    const classes = useStyles()

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon data-testid="menu-button" />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {config.siteData.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

NavBar.propTypes = {
    open: bool.isRequired,
    handleDrawerOpen: func.isRequired,
}

export default NavBar
