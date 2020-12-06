import React from 'react'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import { useParams } from 'react-router-dom'
import BasePage from '../BasePage'

const CompanyPage = ({ open }) => {
    const { id } = useParams()

    return (
        <BasePage open={open}>
            <Container>
                <h1>{`Company ID: ${id}`}</h1>
                <Divider />
            </Container>
        </BasePage>
    )
}

export default CompanyPage
