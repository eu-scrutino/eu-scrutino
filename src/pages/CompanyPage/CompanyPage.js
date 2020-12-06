import React from 'react'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import { useParams } from 'react-router-dom'
import BasePage from '../BasePage'
import { Doughnut } from 'react-chartjs-2'
import { getCompanyById } from '../CompaniesPage/db'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

const getChartData = (company) => {
    return {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [
            {
                label: 'Funding in €',
                data: Object.values(company.funding),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
}

const CompanyPage = () => {
    const { id } = useParams()
    const classes = useStyles()
    const company = getCompanyById(id)
    const chartData = getChartData(company)

    return (
        <BasePage>
            <Container>
                <Typography variant="h1" component="h1">
                    {company.name}
                </Typography>
                <Divider />
                <p className={classes.paragraph}>
                    <Typography variant="h4" component="h4">
                        Founding date
                    </Typography>
                    <span>{company.inceptionDate}</span>
                </p>
                <p className={classes.paragraph}>
                    <Typography variant="h4" component="h4">
                        Business
                    </Typography>
                    <span>{company.business}</span>
                </p>
                <p className={classes.paragraph}>
                    <Typography variant="h4" component="h4">
                        Funding
                    </Typography>
                </p>
                <Doughnut data={chartData} />
            </Container>
        </BasePage>
    )
}

export default CompanyPage
