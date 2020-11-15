import React from 'react'
import Typography from '@material-ui/core/Typography'
import BasePage from '../base'

const LandingPage = ({ open }) => {
    return (
        <BasePage open={open}>
            <Typography paragraph>Landing page</Typography>
        </BasePage>
    )
}

export default LandingPage
