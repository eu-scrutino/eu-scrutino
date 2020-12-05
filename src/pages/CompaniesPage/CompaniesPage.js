import React from 'react'
import BasePage from '../BasePage'
import Container from '@material-ui/core/Container'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TablePagination from '@material-ui/core/TablePagination'
import useStyles from './styles'
import ResourceTableRows from '../../components/ResourceTableRows'
import ResourceTableHeaders from '../../components/ResourceTableHeaders/ResourceTableHeaders'
import { companies as rows, companiesColumns as columns } from './db'

const CompaniesPage = ({ open }) => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <BasePage open={open}>
            <Container>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <ResourceTableHeaders columns={columns} />
                            </TableHead>
                            <TableBody>
                                <ResourceTableRows
                                    rows={rows}
                                    columns={columns}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
        </BasePage>
    )
}

export default CompaniesPage
