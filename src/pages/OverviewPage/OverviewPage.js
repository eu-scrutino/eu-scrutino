import React from 'react'
import useStyles from '../LandingPage/styles'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'

const OverviewPage = ({ open }) => {
    const classes = useStyles()
    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography paragraph>Overview</Typography>
        </main>
    )
}

export default OverviewPage
