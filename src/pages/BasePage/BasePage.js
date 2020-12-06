import React, { useContext } from 'react'
import clsx from 'clsx'
import useStyles from './styles'
import { AppContext } from '../../App'

const BasePage = ({ children }) => {
    const classes = useStyles()
    const { open } = useContext(AppContext)

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            {children}
        </main>
    )
}

export default BasePage
