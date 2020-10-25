import { func, number, shape, string } from 'prop-types'

const ColumnHeader = shape({
    id: string.isRequired,
    label: string.isRequired,
    minWidth: number,
    align: string,
    format: func,
})

export { ColumnHeader }
