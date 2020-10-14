import React from 'react'
import './App.css'
import 'fontsource-roboto'
import { ThemeProvider } from '@material-ui/core/styles'

import Skeleton from './pages'
import theme from './theme'

const App = () => (
    <ThemeProvider theme={theme}>
        <Skeleton />
    </ThemeProvider>
)

export default App
