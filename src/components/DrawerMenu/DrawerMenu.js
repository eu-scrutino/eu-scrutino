import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { useTheme } from '@material-ui/core/styles'
import useStyles from './styles'

const DrawerMenu = ({ children, open, onClose }) => {
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader} data-testid="menu-drawer">
                <IconButton onClick={onClose} data-testid="menu-close">
                    {theme.direction === 'ltr' ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <List>{children}</List>
        </Drawer>
    )
}

export default DrawerMenu
