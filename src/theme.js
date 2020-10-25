import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00aeef',
            contrastText: 'white',
        },
    },
    overrides: {
        MuiTableRow: {
            hover: {
                '&:hover': {
                    backgroundColor: 'rgba(0, 174, 239,0.05) !important',
                },
            },
        },
        MuiTableCell: {
            body: {
                '&:hover': {
                    color: '#00aeef !important',
                },
            },
            head: {
                fontWeight: '600',
                backgroundColor: 'rgba(184, 208, 217,0.2) !important',
            },
        },
    },
})

export default theme
