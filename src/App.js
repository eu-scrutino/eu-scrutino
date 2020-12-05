import React, { useState } from 'react'
import 'fontsource-roboto'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from './components/NavBar'
import DrawerMenu from './components/DrawerMenu'
import { CompaniesPage, LandingPage, OverviewPage } from './pages'
import theme from './theme'
import ListItem from '@material-ui/core/ListItem'

const App = () => {
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
                <DrawerMenu open={open} onClose={handleDrawerClose}>
                    <ListItem component={Link} to="/">
                        Home
                    </ListItem>
                    <ListItem component={Link} to="/companies">
                        Companies
                    </ListItem>
                    <ListItem component={Link} to="/overview">
                        Overview
                    </ListItem>
                </DrawerMenu>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/companies" component={CompaniesPage} />
                    <Route path="/overview" component={OverviewPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
