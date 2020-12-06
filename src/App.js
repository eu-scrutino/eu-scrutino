import React, { useState, createContext } from 'react'
import 'fontsource-roboto'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from './components/NavBar'
import DrawerMenu from './components/DrawerMenu'
import { CompaniesPage, LandingPage, OverviewPage } from './pages'
import theme from './theme'
import ListItem from '@material-ui/core/ListItem'
import CompanyPage from './pages/CompanyPage'

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
                            <Route
                                exact
                                path="/companies"
                                component={CompaniesPage}
                            />
                            <Route
                                path="/companies/:id"
                                component={CompanyPage}
                            />
                            <Route path="/overview" component={OverviewPage} />
                        </Switch>
                    </Router>
                </div>
            </AppContext.Provider>
        </ThemeProvider>
    )
}

export default App
