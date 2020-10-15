import React from 'react'
import './App.css'
import 'fontsource-roboto'
import { ThemeProvider } from '@material-ui/core/styles'

import IndexPage from './pages'
import theme from './theme'

const App = () => (
    <ThemeProvider theme={theme}>
        <IndexPage />
    </ThemeProvider>
)

export default App
