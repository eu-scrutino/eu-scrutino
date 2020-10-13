import React from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

const LandingPage = ({ open }) => {
    const classes = useStyles()
    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography paragraph>Dummy text</Typography>
            <Typography paragraph>Dummy text (2)</Typography>
        </main>
    )
}

export default LandingPage
