import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import BasePage from '../BasePage'

const OverviewPage = ({ open }) => {
    return (
        <BasePage open={open}>
            <Container>
                <Typography paragraph>Overview</Typography>
            </Container>
        </BasePage>
    )
}

export default OverviewPage
