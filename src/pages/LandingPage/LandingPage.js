import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import BasePage from '../BasePage'

const LandingPage = ({ open }) => {
    return (
        <BasePage open={open}>
            <Container>
                <Typography variant="h1" component="h1" gutterBottom>
                    EU | scrutino
                </Typography>
                <Typography variant="h3" component="h4" gutterBottom>
                    Um plataforma para a transparência
                </Typography>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Container>
        </BasePage>
    )
}

export default LandingPage
