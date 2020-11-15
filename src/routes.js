import React from 'react'
import LandingPage from './pages/LandingPage'
import OverviewPage from './pages/OverviewPage'
import CompaniesPage from './pages/Companies'

const ROUTES = [
    { label: 'Landing', page: (props) => <LandingPage {...props} /> },
    { label: 'Overview', page: (props) => <OverviewPage {...props} /> },
    { label: 'Companies', page: (props) => <CompaniesPage {...props} /> },
]

export const getRouteListing = () => ROUTES.map((route) => route.label)
export const getPage = (label, props) => {
    const route = ROUTES.find((route) => route.label === label)
    return route ? route.page(props) : <LandingPage {...props} />
}
export const DEFAULT_ROUTE = ROUTES[0].label

export default ROUTES
