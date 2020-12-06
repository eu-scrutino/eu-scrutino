import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { array, arrayOf, number } from 'prop-types'
import { ColumnHeader } from '../../types'
import { Link } from 'react-router-dom'

const ResourceTableRows = ({ rows, columns, page = 1, rowsPerPage = 10 }) => {
    return rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
            <TableRow
                hover
                tabIndex={-1}
                key={row.code}
                component={Link}
                to={`/companies/${row.id}`}
                style={{ textDecoration: 'none' }}
            >
                {columns.map((column) => {
                    const value = row[column.id]
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                        </TableCell>
                    )
                })}
            </TableRow>
        ))
}

ResourceTableRows.propTypes = {
    rows: array.isRequired,
    columns: arrayOf(ColumnHeader).isRequired,
    page: number,
    rowsPerPage: number,
}

export default ResourceTableRows
