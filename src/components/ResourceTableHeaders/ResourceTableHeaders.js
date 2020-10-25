import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import React from 'react'
import { arrayOf } from 'prop-types'
import { ColumnHeader } from '../../types'

const ResourceTableHeaders = ({ columns }) => {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                        minWidth: column.minWidth,
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    )
}

ResourceTableHeaders.propTypes = {
    columns: arrayOf(ColumnHeader),
}

export default ResourceTableHeaders
