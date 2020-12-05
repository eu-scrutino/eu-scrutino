import React from 'react'
import Typography from '@material-ui/core/Typography'
import BasePage from '../BasePage'

const OverviewPage = ({ open }) => {
    return (
        <BasePage open={open}>
            <Typography paragraph>Overview</Typography>
        </BasePage>
    )
}

export default OverviewPage
