import React, { useState, createContext } from 'react'
import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import theme from './theme'

import NavBar from './components/NavBar'
import DrawerMenu from './components/DrawerMenu'
import { CompaniesPage, LandingPage, OverviewPage, CompanyPage } from './pages'
import * as ROUTES from './constants/routes'

export const AppContext = createContext({ open: false })

const App = () => {
    const [open, setOpen] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{ open, setOpen }}>
                <CssBaseline />
                <div style={{ display: 'flex' }}>
                    <Router>
                        <NavBar />
                        <DrawerMenu>
                            <ListItem component={Link} to={ROUTES.ROOT}>
                                Home
                            </ListItem>
                            <ListItem component={Link} to={ROUTES.COMPANIES}>
                                Companies
                            </ListItem>
                            <ListItem component={Link} to={ROUTES.OVERVIEW}>
                                Overview
                            </ListItem>
                        </DrawerMenu>
                        <Switch>
                            <Route
                                exact
                                path={ROUTES.ROOT}
                                component={LandingPage}
                            />
                            <Route
                                exact
                                path={ROUTES.COMPANIES}
                                component={CompaniesPage}
                            />
                            <Route
                                path={ROUTES.COMPANY}
                                component={CompanyPage}
                            />
                            <Route
                                path={ROUTES.OVERVIEW}
                                component={OverviewPage}
                            />
                        </Switch>
                    </Router>
                </div>
            </AppContext.Provider>
        </ThemeProvider>
    )
}

export default App
