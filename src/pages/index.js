import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FileCopy from '@material-ui/icons/FileCopy'
import NavBar from '../components/NavBar'
import useStyles from './styles'
import { getRouteListing, getPage, DEFAULT_ROUTE } from '../routes'

const IndexPage = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [route, setRoute] = useState(DEFAULT_ROUTE)
    const routes = getRouteListing()

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
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
                    <IconButton
                        onClick={handleDrawerClose}
                        data-testid="menu-close"
                    >
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {routes.map((route) => (
                        <ListItem
                            button
                            key={route}
                            onClick={() => setRoute(route)}
                        >
                            <ListItemIcon>
                                <FileCopy />
                            </ListItemIcon>
                            <ListItemText primary={route} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {getPage(route, { open })}
        </div>
    )
}

export default IndexPage
