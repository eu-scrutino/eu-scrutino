import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        MuiToolbar: {
            root: {
                backgroundColor: '#00aeef',
            },
        },
    },
});

export default theme