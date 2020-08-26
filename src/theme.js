import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    spacing: 10,
    palette: {
        primary: {
            main: '#b8e6ff'
        },
        secondary: {
            main: '#fff5b5'
        },
        tertiary: {
            main: '#0d6885'
        }
    },
    text: {
        fontSize: {
            primary: '64px',
            secondary: '32px'
        }
    },
});

export default theme;
