import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthApi from '../../../data/api/AuthApi';
import { Grid, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.tertiary.main,
        position: 'fixed',
        height: '44px'
    },
    icon: {
        color: 'yellow',
        margin: `${theme.spacing(1)}px`,
        '&:hover': {
            color: 'white'
        }
    }
}));

const NavBar = ({signOut}) => {
    const classes = useStyles();

    const history = useHistory();
    const handleSignOut = _ => AuthApi.signOut()
        .then(res => {
            localStorage.setItem('isLoggedIn', 'false');
            signOut();
            history.push('/');
        })
        .catch(err => {
            console.error(err);
        });

    return (
        <Grid container
              justify='flex-end'
              className={classes.root}
        >
            <IconButton onClick={handleSignOut} style={{padding: 0}}>
                <ExitToAppIcon className={classes.icon}/>
            </IconButton>
        </Grid>
    );
};

export default NavBar;