import { makeStyles } from '@material-ui/core/styles'
import { ui } from '../../constants'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: ui.DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: ui.DRAWER_WIDTH,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))

export default useStyles
