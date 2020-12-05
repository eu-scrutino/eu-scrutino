import React from 'react'
import clsx from 'clsx'
import useStyles from './styles'

const BasePage = ({ children, open }) => {
    const classes = useStyles()

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
